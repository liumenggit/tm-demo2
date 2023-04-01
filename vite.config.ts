import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
import tmuiCss from "./src/tmui/tool/vitePlugs/tmuiCss";
import {resolve} from "path"
// https://vitejs.dev/config/
import type {ConfigEnv, UserConfig} from 'vite'
import {loadEnv} from 'vite'

export default ({mode}: ConfigEnv): UserConfig => {
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
        ],
    }
}