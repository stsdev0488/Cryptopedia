import InAppBrowser from 'react-native-inappbrowser-reborn';

export const openLink = async (link: string) => {
  InAppBrowser.close();
  const isInAppBrowserAvalible = await InAppBrowser.isAvailable();

  if (!link || !isInAppBrowserAvalible) {
    return;
  }

  InAppBrowser.open(link, {
    dismissButtonStyle: 'close',
  });
};
