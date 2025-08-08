# JsPkg
> 常用的函数与包封装为库

## 安装
> jspkg名称已占用以用户名来做包名
```bash
npm i penndev
```

## 格式化
- `timeFormat("Y-m-d H:i:s", Date.now())`
    > 格式化时间戳 输出: 2025-08-07 20:35:13
- `secFormat(number)`
    > 格式化秒 输出: 8.00年
- `byteFormat(number)`
    > 格式化字节 输出: 8.88(PByte)
- `bpsFormat(number)`
    > 格式化bps字符串 输出: 88.8(MBps)