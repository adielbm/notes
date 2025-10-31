
# clone xv6, install qemu and toolchain, set env vars

```bash
git clone https://github.com/mit-pdos/xv6-public.git

cd xv6-public

brew install qemu
brew install i686-elf-gcc
brew install i686-elf-binutils
brew install i386-elf-gdb

echo 'export QEMU=qemu-system-i386' >> ~/.zshrc
echo 'export TOOLPREFIX=i686-elf-' >> ~/.zshrc
source ~/.zshrc
```

# build and run xv6

```bash
# clean previous builds
make clean
# build xv6 
make
# run xv6 in qemu, no graphical output 
make qemu-nox # OR 
# run xv6 in qemu with graphical output
make qemu
```

