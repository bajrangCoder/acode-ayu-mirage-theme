import plugin from '../plugin.json';
const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');
class AcodePlugin {

  async init() {
    try{
      const WHITE = "#FFFFFF";
      const ayuMirage = new ThemeBuilder('AyuMirage','dark');
      ayuMirage.primaryColor = '#0F131A';
      ayuMirage.darkenedPrimaryColor = '#0F131A';
      ayuMirage.primaryTextColor = WHITE;
      ayuMirage.secondaryColor = '#0D1017';
      ayuMirage.secondaryTextColor = "#67789e";
      ayuMirage.activeColor = '#a16b00';
      ayuMirage.activeIconColor = '#FFB454';
      ayuMirage.linkTextColor = '#59C2FF';
      ayuMirage.errorTextColor = '#c22800';
      ayuMirage.borderColor = '#47526633';
      ayuMirage.borderRadius = '25px';
      ayuMirage.popupIconColor = WHITE;
      ayuMirage.popupBackgroundColor = '#0B0E14';
      ayuMirage.popupTextColor = WHITE;
      ayuMirage.popupActiveColor = '#E6B450';
      ayuMirage.popupBorderColor = '#47526640';
      ayuMirage.boxShadowColor = "#00000080";
      ayuMirage.preferredFont = "Victor Mono Medium";
      themes.add(ayuMirage);
      themes.apply("AyuMirage");
    }catch(err){
      acode.alert("Error",err);
    }
  }

    async destroy() {
        
    }
}

if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}