const ci = require('miniprogram-ci');
const fs = require('fs')
const manifest = JSON.parse(fs.readFileSync('./src/manifest.json', 'utf8'))
const config = JSON.parse(fs.readFileSync('./src/manifest.json', 'utf8'))
let {wxVersion: version, wxDesc: desc} = config;
const appid = manifest['mp-weixin'].appid;
const cwd = process.cwd() + '/dist/build/mp-weixin';
if (!desc) desc = new Date() + '上传';
if (!version) version = '1.0.1';
// process.argv
(async () => {
    const project = new ci.Project({
        appid: appid,
        type: 'miniProgram',
        projectPath: cwd,
        privateKeyPath: process.cwd() + '/src/key/private.' + appid + '.key',
        ignores: ['node_modules/**/*'],
    })
    const previewResult = await ci.preview({
        project,
        version: version,
        desc: desc,
        setting: {
            minify: true,
        },
        qrcodeFormat: 'image',
        qrcodeOutputDest: process.cwd() + '/qrcode/destination.jpg',
        onProgressUpdate: console.log,
        pagePath: 'pages/index/index', // 预览页面
        // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
    }).then(res => {
        console.log('上传成功', res)
    }).catch(err => {
        console.log('上传失败', err)
        process.exit(-1)
    })
    console.log('previewResult', previewResult)
})()
