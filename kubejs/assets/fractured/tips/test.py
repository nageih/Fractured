import json
import os


def batch_update_json(folder_path):
    """递归遍历文件夹并转换目标 JSON 格式"""
    updated_count = 0
    skipped_count = 0
    error_count = 0

    if not os.path.exists(folder_path):
        print(f"错误: 路径 '{folder_path}' 不存在！")
        return

    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                try:
                    # 读取 JSON 文件
                    with open(file_path, "r", encoding="utf-8") as f:
                        data = json.load(f)

                    # 检查是否符合转换条件：包含顶层 translate 且未转换过
                    if (
                        isinstance(data, dict)
                        and "translate" in data
                        and "text" not in data
                    ):
                        translate_val = data.pop("translate")
                        data["text"] = {"translate": translate_val}

                        # 覆盖写入新格式 JSON
                        with open(file_path, "w", encoding="utf-8") as f:
                            json.dump(data, f, ensure_ascii=False, indent=2)

                        updated_count += 1
                        print(f"[已更新] {file_path}")
                    else:
                        skipped_count += 1

                except Exception as e:
                    error_count += 1
                    print(f"[错误] 处理文件 {file_path} 失败: {e}")

    print("\n" + "=" * 40)
    print(
        f"处理完成！成功更新: {updated_count} 个 | 跳过: {skipped_count} 个 | 失败: {error_count} 个"
    )


if __name__ == "__main__":
    target_dir = input("请输入目标文件夹路径: ").strip().strip('"')
    batch_update_json(target_dir)