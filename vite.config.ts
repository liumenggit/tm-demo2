import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
import tmuiCss from "./src/tmui/tool/vitePlugs/tmuiCss";
import {resolve} from "path"
import type {ConfigEnv, UserConfig} from 'vite'
import {loadEnv} from 'vite'

const fs = require('fs');
const manifestPath = './src/manifest.json';
let Manifest = fs.readFileSync(manifestPath, {encoding: 'utf-8'});

function replaceManifest(path: string, value: any) {
    const arr = path.split('.');
    const len = arr.length;
    const lastItem = arr[len - 1];

    let i = 0;
    let ManifestArr = Manifest.split(/\n/);

    for (let index = 0; index < ManifestArr.length; index++) {
        const item = ManifestArr[index];
        if (new RegExp(`"${arr[i]}"`).test(item)) ++i;
        if (i === len) {
            const hasComma = /,/.test(item);
            ManifestArr[index] = item.replace(
                new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
                `"${lastItem}": ${value}${hasComma ? ',' : ''}`
            );
            break;
        }
    }

    Manifest = ManifestArr.join('\n');
}

export default ({mode}: ConfigEnv) => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    // 在控制台输出环境变量
    console.log('当前环境：', env)
    return {
        resolve: {
            alias: [
                {
                    find: "@",
                    replacement: resolve(__dirname, 'src')
                }
            ]
        },
        server: {
            // 选项写法
            port: env.VITE_PORT as unknown as number,
            proxy: {
                // '/pag': {
                //     target: 'https://cdn.tmui.design',
                //     changeOrigin: true,
                //     rewrite: (path) => path.replace(/^\/api/, '/api')
                // },
                // '/api': {
                //     target: env.VITE_BASE_URL,
                //     changeOrigin: true,
                //     rewrite: path => path.replace(/^\/api/, ''),
                // },
            }
        },
        plugins: [
            uni(),
            vueJsx(),
            tmuiCss(),
            () => {
                // replaceManifest('app-plus.usingComponents', false);
                // replaceManifest('app-plus.splashscreen.alwaysShowBeforeRender', false);
                // replaceManifest('mp-weixin.appid', '"wx50693dd0b5cb3b6d"');
                // fs.writeFileSync(manifestPath, Manifest, {
                //     flag: 'w',
                // });
            }
        ],
    }
}