import os

def main():
    src_path = os.path.join(os.path.dirname(__file__), "entry.png")
    out_dir = os.getenv("MAKEFUN_OUTPUT_DIR", "/output")
    os.makedirs(out_dir, exist_ok=True)
    with open(src_path, "rb") as src, open(os.path.join(out_dir, "entry.png"), "wb") as dst:
        dst.write(src.read())

if __name__ == "__main__":
    main()
