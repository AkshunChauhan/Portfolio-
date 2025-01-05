#!/bin/bash
echo "Checking for document usage..."
grep -r "document" ./components

echo "Checking for window usage..."
grep -r "window" ./components

echo "Checking for use client..."
grep -r "use client" ./components