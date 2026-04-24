{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [
    pkgs.nodejs-slim_24
    pkgs.bun
    pkgs.pnpm
    pkgs.typescript
    pkgs.typescript-language-server
  ];
}
