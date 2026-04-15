{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [
    pkgs.python3
    pkgs.python3Packages.pip
    # pkgs.python3Packages.venvShellHook
    pkgs.uv
    pkgs.nodejs-slim_24
    pkgs.pnpm
    pkgs.typescript
    pkgs.typescript-language-server
  ];
}
