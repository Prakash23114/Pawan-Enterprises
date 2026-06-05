import { useEffect, useState } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert("Install prompt not available yet.");
      return;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
  };

  return (
    <button
      onClick={handleInstall}
      className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold"
    >
      Install App
    </button>
  );
}