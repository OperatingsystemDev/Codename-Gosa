bits 16
org 0x7E00


mov ah, 0x0000
mov al, 0x0020

_START()

mov si, Ex1F0
mov es, 0x0020
add ah, Ex1F0