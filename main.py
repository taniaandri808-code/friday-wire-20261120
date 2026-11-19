import os
import shutil

def main():
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    src_path = os.path.join(script_dir, "entry.png")

    # Get output directory from env, default to "output" in current directory
    out_dir = os.getenv("MAKEFUN_OUTPUT_DIR", "output")
    os.makedirs(out_dir, exist_ok=True)

    # Copy the file
    dst_path = os.path.join(out_dir, "entry.png")
    shutil.copy2(src_path, dst_path)

    # Print the copied path
    print(dst_path)

if __name__ == "__main__":
    main()
