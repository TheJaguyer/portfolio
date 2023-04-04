
import { Unity, useUnityContext } from "react-unity-webgl";
import {useEffect} from 'react'

export default function Logico() {
  const {
    unityProvider,
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "/Build/Builds.loader.js",
    dataUrl: "/Build/Builds.data",
    frameworkUrl: "/Build/Builds.framework.js",
    codeUrl: "/Build/Builds.wasm",
  });

  useEffect(() => {
    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
    };
  }, [detachAndUnloadImmediate]);

  return (
    <div style={{width: '100%', height: '100%',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Unity
      width={640} height={360}
        style={{ width: "640px", height: "360px",outline: '4px solid white', boxSizing: 'border-box'}}
        unityProvider={unityProvider}
      />
    </div>
  );
};