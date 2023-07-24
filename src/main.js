import plugin from '../plugin.json';
import style from './style.css'

const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');
const Url = acode.require("Url");
const helpers = acode.require("helpers");
const appSettings = acode.require('settings');

// overiding the acode `helper.getIconForFile()` function to add many more icons
function getFileType(filename) {
    const regex = {
        babel: /\.babelrc$/i,
        jsmap: /\.js\.map$/i,
        yarn: /^yarn\.lock$/i,
        testjs: /\.test\.js$/i,
        testts: /\.test\.ts$/i,
        cssmap: /\.css\.map$/i,
        typescriptdef: /\.d\.ts$/i,
        clojurescript: /\.cljs$/i,
        cppheader: /\.(hh|hpp)$/i,
        jsconfig: /^jsconfig.json$/i,
        tsconfig: /^tsconfig.json$/i,
        android: /\.(apk|aab|slim)$/i,
        jsbeautify: /^\.jsbeautifyrc$/i,
        webpack: /^webpack\.config\.js$/i,
        audio: /\.(mp3|wav|ogg|flac|aac)$/i,
        git: /(^\.gitignore$)|(^\.gitmodules$)|(^\.gitattributes)/i,
        video: /\.(mp4|m4a|mov|3gp|wmv|flv|avi)$/i,
        image: /\.(png|jpg|jpeg|gif|bmp|ico|webp)$/i,
        npm: /(^package\.json$)|(^package\-lock\.json$)/i,
        compressed: /\.(zip|rar|7z|tar|gz|gzip|dmg|iso)$/i,
        eslint: /(^\.eslintrc(\.(json5?|ya?ml|toml))?$|eslint\.config\.(c?js|json)$)/i,
        postcssconfig: /(^\.postcssrc(\.(json5?|ya?ml|toml))?$|postcss\.config\.(c?js|json)$)/i,
        prettier: /(^\.prettierrc(\.(json5?|ya?ml|toml))?$|prettier\.config\.(c?js|json)$)/i,
        font: /\.(ttf|otf|woff|woff2|eot)$/i,
        replit: /^\.replit$/i, // .replit
        env: /^\.env$/i, // .env
        license: /^(license|LICENSE|License)$/i, // License
        procfile: /^Procfile$/i, // Procfile
        poetry: /^pyproject\.toml$/i, // Poetry
        tailwindcss: /tailwind\.config(\.(c?js|json|yaml|yml|ts|tsx))?$|\.tailwindrc(\.(c?js|json|yaml|yml|ts|tsx))?$/i, // Tailwindcss config
        tauri: /tauri\.config(\.(c?js|json|yaml|yml|ts|tsx))?$/i, // Tauri config
        vite: /vite\.config(\.(c?js|json|ts|tsx))?$/i // Vite config
    };

    const fileType = Object.keys(regex).find((type) => regex[type].test(filename));
    if(fileType) return fileType;

    return Url.extname(filename).substring(1);
}

helpers.getIconForFile = (filename) => {
    const { getModeForPath } = ace.require('ace/ext/modelist');
    const type = getFileType(filename);
    const { name } = getModeForPath(filename);

    const iconForMode = `file_type_${name}`;
    const iconForType = `file_type_${type}`;

    return `file file_type_default ${iconForMode} ${iconForType}`;
}

class AyuTheme {
    #style
    isIconPack = true;
    constructor() {
        if(!appSettings.value[plugin.id]) {
            appSettings.value[plugin.id] = {
                iconPack: this.isIconPack,
            };
            appSettings.update(false);
        }
    }

    async init() {
        try {
            this.#style = <style
                textContent={style}
            ></style>
            document.head.append(this.#style);
            const WHITE = "#FFFFFF";
            // 1st Ayu Mirage theme
            const ayuMirage = new ThemeBuilder('Ayu Mirage', 'dark', 'free');
            ayuMirage.primaryColor = '#1C212B';
            ayuMirage.darkenedPrimaryColor = '#1C212B';
            ayuMirage.primaryTextColor = WHITE;
            ayuMirage.secondaryColor = '#242936';
            ayuMirage.secondaryTextColor = "#707A8C";
            ayuMirage.activeColor = '#707A8C';
            ayuMirage.activeIconColor = '#FFAD66';
            ayuMirage.linkTextColor = '#73D0FF';
            ayuMirage.errorTextColor = '#FF6666';
            ayuMirage.borderColor = '#69758C1F';
            ayuMirage.borderRadius = '8px';
            ayuMirage.popupBorderRadius = '13px';
            ayuMirage.popupIconColor = WHITE;
            ayuMirage.popupBackgroundColor = '#171B24';
            ayuMirage.popupTextColor = WHITE;
            ayuMirage.popupActiveColor = '#FFD173';
            ayuMirage.popupBorderColor = '#63759926';
            ayuMirage.boxShadowColor = "#12151c91";
            ayuMirage.scrollbarColor = "#8A9199CC";
            ayuMirage.buttonActiveColor = "#ffad66c6";
            ayuMirage.buttonBackgroundColor = "#FFAD66";
            ayuMirage.buttonTextColor = WHITE;
            ayuMirage.preferredFont = "Victor Mono Medium";

            // 2nd Ayu Mirage Dark version
            const ayuDark = new ThemeBuilder('Ayu Dark', 'dark', 'free');
            ayuDark.primaryColor = '#0F131A';
            ayuDark.darkenedPrimaryColor = '#0F131A';
            ayuDark.primaryTextColor = WHITE;
            ayuDark.secondaryColor = '#0D1017';
            ayuDark.secondaryTextColor = "#67789e";
            ayuDark.activeColor = '#a16b00';
            ayuDark.activeIconColor = '#FFB454';
            ayuDark.linkTextColor = '#59C2FF';
            ayuDark.errorTextColor = '#c22800';
            ayuDark.borderColor = '#47526633';
            ayuDark.borderRadius = '8px';
            ayuDark.popupBorderRadius = '13px';
            ayuDark.popupIconColor = WHITE;
            ayuDark.popupBackgroundColor = '#0B0E14';
            ayuDark.popupTextColor = WHITE;
            ayuDark.popupActiveColor = '#E6B450';
            ayuDark.popupBorderColor = '#47526640';
            ayuDark.boxShadowColor = "#00000080";
            ayuDark.scrollbarColor = "#6C7380E6";
            ayuDark.buttonActiveColor = "#FF8F40";
            ayuDark.buttonBackgroundColor = "#FFB454";
            ayuDark.buttonTextColor = WHITE;
            ayuDark.preferredFont = "Victor Mono Medium";
            themes.add(ayuMirage);
            themes.add(ayuDark);
            if(!this.settings.iconPack){
                this.#style.remove();
            }
        } catch(err) {
            acode.alert("Error", err);
        }
    }
    
    get settingsObj() {
        return {
            list: [
                {
                    key: 'iconPack',
                    text: 'Enable/Disable Icon Pack',
                    checkbox: this.settings.iconPack,
                    info: `If set to "true" means checked, then it will add a versatile icon pack to acode and that will match Ayu theme schema. If set to "false" means unchecked then icon pack will not be applied`,
                },
            ],
            cb: (key, value) => {
                this.settings[key] = value;
                appSettings.update();
                if(this.settings.iconPack){
                    document.head.append(this.#style);
                } else {
                    this.#style.remove();
                }
            },
        }
    }
    
    get settings() {
        return appSettings.value[plugin.id];
    }

    async destroy() {
        this.#style.remove();
        delete appSettings.value[plugin.id]
        appSettings.update(false);
    }
}

if(window.acode) {
    const acodePlugin = new AyuTheme();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if(!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    }, acodePlugin.settingsObj);
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}