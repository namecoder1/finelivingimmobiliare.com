
const CopyLinkButton = () => {
  const copyLinkToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
  };

  return (
    <button
      onClick={copyLinkToClipboard}
      className="bg-secondary text-white border-secondary hover:bg-white hover:text-secondary flex gap-2 items-center justify-center font-semibold py-2 px-3 rounded-lg border-2 duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19z"/></svg>
      Copia Link
    </button>
  );
};

export default CopyLinkButton;