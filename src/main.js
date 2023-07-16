import plugin from '../plugin.json';
import style from './style.css'

const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');
class AyuTheme {
    #style
    
    async init() {
        try {
            this.#style = <style
                textContent={style}
            ></style>
            document.head.append(this.#style)
            const WHITE = "#FFFFFF";
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
            ayuMirage.boxShadowColor = "#12151CB3";
            ayuMirage.scrollbarColor = "#8A9199CC";
            ayuMirage.buttonActiveColor = "#ffad66c6";
            ayuMirage.buttonBackgroundColor = "#FFAD66";
            ayuMirage.buttonTextColor = WHITE;
            ayuMirage.preferredFont = "Victor Mono Medium";
            
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
        } catch(err) {
            acode.alert("Error", err);
        }
    }

    async destroy() {
        this.#style.remove();
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
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}