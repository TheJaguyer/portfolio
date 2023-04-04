import { Unity, useUnityContext } from 'react-unity-webgl';
import { useEffect } from 'react';
import styles from '@/styles/logico.module.css';

export default function Logico() {
  const { unityProvider, UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate } = useUnityContext({
    loaderUrl: '/Build/Builds.loader.js',
    dataUrl: '/Build/Builds.data',
    frameworkUrl: '/Build/Builds.framework.js',
    codeUrl: '/Build/Builds.wasm'
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div className={styles.wrapper}>
      <Unity className={styles.player} unityProvider={unityProvider} />
    </div>
  );
}
