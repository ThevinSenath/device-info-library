import { Device } from "../node_modules/@capacitor/device/dist/esm/index";

export enum DeviceChannel {
	Web = 36,
	MobileWeb = 39,
	iPhone = 40,
	iPad = 41,
	AndroidPhone = 42,
	AndroidTab = 43,
	Desktop = 44,
	InvestAndroid = 47,
	InvestIOS = 48,
}

export enum Platform {
	Android = 'android',
	IOS = 'ios',
	Electron = 'electron',
	Web = 'web',
}

export enum OperatingSystem {
	Android = 'android',
	IOS = 'ios',
	Windows = 'windows',
	Mac = 'mac',
	Other = 'unknown',
}

export const deviceInfo = Device.getInfo().then(deviceInfo => {
    return deviceInfo;
});

// export const setDeviceChannel = (model?: string, platform?: string, operatingSystem?: string, isNativeWrapper = false, isTabletDevice = false, platformType = window.navigator.platform, isGtnSave = false): DeviceChannel => {
    
//     if (!model || !platform || !operatingSystem) {
//         return DeviceChannel.Web;
//     }    

//     const osMap = {
//         [OperatingSystem.Android]: () => {
//             if (isNativeWrapper) {
//                 return platform === Platform.Android && isTabletDevice
//                     ? DeviceChannel.AndroidTab
//                     : isGtnSave
//                     ? DeviceChannel.InvestAndroid
//                     : DeviceChannel.AndroidPhone;
//             }
//             return isGtnSave ? DeviceChannel.InvestAndroid : DeviceChannel.MobileWeb;
//         },
//         [OperatingSystem.IOS]: () => {
//             if (isNativeWrapper && platform === Platform.IOS) {
//                 const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
//                 if (macosPlatforms.includes(platformType)) return DeviceChannel.Desktop;
//                 if (model.includes('iPad')) return DeviceChannel.iPad;
//                 if (model.includes('iPhone')) return isGtnSave ? DeviceChannel.InvestIOS : DeviceChannel.iPhone;
//             }
//             return isGtnSave ? DeviceChannel.InvestIOS : DeviceChannel.MobileWeb;
//         },
//         [OperatingSystem.Windows]: () => (isNativeWrapper ? DeviceChannel.Desktop : DeviceChannel.Web),
//         [OperatingSystem.Mac]: () => (isNativeWrapper ? DeviceChannel.Desktop : DeviceChannel.Web),
//         [OperatingSystem.Other]: () => (isNativeWrapper ? DeviceChannel.Desktop : DeviceChannel.Web),
//     };

//     return osMap[operatingSystem] ? osMap[operatingSystem]() : DeviceChannel.Web;
// };
