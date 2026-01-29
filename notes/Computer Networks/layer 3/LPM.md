#### Longest Prefix Match (LPM)


```python
# run
# -----------------------------
# Longest Prefix Match + per-hop IP count
# -----------------------------

INPUT_ROUTES = {
    '182.168.112.0/24': 'A',
    '182.168.80.0/24':  'A',
    '182.168.0.0/17':   'B',
    '182.168.63.0/24':  'C',
    '182.168.64.0/18':  'C',
    '182.168.96.0/19':  'D',
    '0.0.0.0/0':        'E'   # Default route
}

DEST_IP_STR = '182.168.70.35'

# -----------------------------
# Utility Functions
# -----------------------------

def ip_to_int(ip_str):
    parts = [int(p) for p in ip_str.split('.')]
    return (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]

def dot_to_binary_ip(ip_str):
    return '.'.join(f"{int(p):08b}" for p in ip_str.split('.'))

def cidr_block_size(p_len):
    return 1 << (32 - p_len)


# -----------------------------
# Longest Prefix Match
# -----------------------------

dest_ip_int = ip_to_int(DEST_IP_STR)
best_match_cidr = None
best_match_next_hop = None
max_p_len = -1
route_analysis = []

for route_cidr, next_hop in INPUT_ROUTES.items():
    net_str, p_len_str = route_cidr.split('/')
    p_len = int(p_len_str)

    route_net_int = ip_to_int(net_str)
    mask_int = (0xFFFFFFFF << (32 - p_len)) & 0xFFFFFFFF

    is_match = (dest_ip_int & mask_int) == route_net_int

    route_analysis.append({
        'cidr': route_cidr,
        'next_hop': next_hop,
        'is_match': is_match
    })

    if is_match and p_len > max_p_len:
        max_p_len = p_len
        best_match_cidr = route_cidr
        best_match_next_hop = next_hop


# -----------------------------
# Per-Hop IP count
# -----------------------------

hop_ip_count = {}

for route_cidr, next_hop in INPUT_ROUTES.items():
    _, p_len_str = route_cidr.split('/')
    p_len = int(p_len_str)
    block_size = cidr_block_size(p_len)

    hop_ip_count[next_hop] = hop_ip_count.get(next_hop, 0) + block_size


# -----------------------------
# Printing
# -----------------------------

max_key_len = max(len(key) for key in ["Input Packet Dest IP", "Best Match CIDR", "Prefix Length", "Final Next Hop"])

route_header_width = 18
next_hop_width = 11
match_width = 25
total_width = route_header_width + next_hop_width + match_width + 4


print("Longest Prefix Match (LPM)\n")
print("(A,B,... in Next Hops are some IPs)\n")

print(f"{'Packet Dest IP'}\t{DEST_IP_STR} = {dot_to_binary_ip(DEST_IP_STR)}")
print("-" * total_width)

print(f"{'Route (CIDR)':<{route_header_width}}  {'Next Hop':<{next_hop_width}}  {'':<{match_width}}")
print("-" * total_width)

for entry in route_analysis:
    match_output = "Match" if entry['is_match'] else ""
    print(f"{entry['cidr']:<{route_header_width}}  {entry['next_hop']:<{next_hop_width}}  {match_output:<{match_width}}")

print("-" * total_width)
print(f"{'Final Next Hop':{max_key_len}}\t{best_match_next_hop}\n")


# -----------------------------
# Print per-hop IP coverage
# -----------------------------

print("IP addresses covered per next hop (raw CIDR block sizes):")
print("-" * 50)

for hop, count in sorted(hop_ip_count.items()):
    print(f"Next Hop {hop}: {count} addresses")

print("-" * 50)

```