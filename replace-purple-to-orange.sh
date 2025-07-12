#!/bin/bash

# 紫色转橙色替换脚本
echo "开始将SVG文件中的紫色替换为橙色..."

# 进入图片目录
cd /mnt/c/Users/zbin/gitbook/docs/public/images

# 创建备份
echo "创建备份目录..."
mkdir -p svg-backup-orange
cp *.svg svg-backup-orange/

# 执行颜色替换
echo "执行颜色替换..."
for file in *.svg; do
    if [ -f "$file" ]; then
        echo "处理: $file"
        
        # 替换深紫色 #5a48a4 为深橙色 #E5A000
        sed -i 's/#5a48a4/#E5A000/gi' "$file"
        
        # 替换浅紫色 #b09cff 为浅橙色 #F8E6B8
        sed -i 's/#b09cff/#F8E6B8/gi' "$file"
    fi
done

echo "颜色替换完成！"
echo ""
echo "替换内容："
echo "- 深紫色 #5a48a4 → 深橙色 #E5A000"
echo "- 浅紫色 #b09cff → 浅橙色 #F8E6B8"
echo ""
echo "备份文件保存在: svg-backup-orange 目录"
echo ""
echo "如需还原，运行："
echo "cp svg-backup-orange/*.svg ."