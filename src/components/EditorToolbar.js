const EditorToolbar = ({
  onRequestReset,
  onRun,
  fontSize,
  onFontSizeChange,
  theme,
  onThemeChange,
  language,
  onLanguageChange,
  isSettingsOpen,
  setIsSettingsOpen,
}) => {
  return (
    <>
      {isSettingsOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/50"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}

      <div className="hidden md:flex flex-row items-center gap-3 border-b border-slate-700 bg-slate-800 px-4 py-5 overflow-x-auto">
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onRun}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-emerald-400 whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Run
          </button>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onRequestReset}
            className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-600 whitespace-nowrap"
          >
            Reset code
          </button>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
          <label className="text-xs text-slate-300 whitespace-nowrap">
            Font
          </label>
          <select
            value={fontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            className="rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-xs text-slate-100 min-w-[70px]"
          >
            {[12, 14, 16, 18, 20].map((size) => (
              <option key={size} value={size}>
                {size}px
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
          <label className="text-xs text-slate-300 whitespace-nowrap">
            Theme
          </label>
          <select
            value={theme}
            onChange={(e) => onThemeChange(e.target.value)}
            className="rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-xs text-slate-100 min-w-[120px] max-w-[160px]"
          >
            <optgroup label="Dark Themes">
              <option value="dracula">Dracula</option>
              <option value="monokai">Monokai</option>
              <option value="githubDark">GitHub Dark</option>
              <option value="solarizedDark">Solarized Dark</option>
              <option value="vscodeDark">VS Code Dark</option>
              <option value="tokyoNight">Tokyo Night</option>
            </optgroup>
            <optgroup label="Light Themes">
              <option value="githubLight">GitHub Light</option>
              <option value="solarizedLight">Solarized Light</option>
              <option value="vscodeLight">VS Code Light</option>
            </optgroup>
          </select>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
          <label className="text-xs text-slate-300 whitespace-nowrap">
            Language
          </label>
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="rounded-md border border-slate-600 bg-slate-900 px-2 py-1 text-xs text-slate-100 min-w-[100px] max-w-[130px]"
          >
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>

      {/* Mobile Settings Panel - Slides from right */}
      <div
        className={`fixed md:hidden inset-y-0 right-0 z-40 transform transition-transform duration-300 ${
          isSettingsOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-slate-800 border-l border-slate-700 flex flex-col`}
      >
        {/* Settings Header */}
        <div className="flex items-center justify-between border-b border-slate-700 p-4">
          <h3 className="text-lg font-semibold text-slate-100">Settings</h3>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-700 transition"
            aria-label="Close settings"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Run Button */}
          <div>
            <button
              onClick={() => {
                onRun();
                setIsSettingsOpen(false);
              }}
              className="w-full rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-emerald-400 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Run
            </button>
          </div>

          {/* Reset Button */}
          <div>
            <button
              onClick={() => {
                onRequestReset();
                setIsSettingsOpen(false);
              }}
              className="w-full rounded-lg bg-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-600"
            >
              Reset code
            </button>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Font Size
            </label>
            <select
              value={fontSize}
              onChange={(e) => {
                onFontSizeChange(Number(e.target.value));
              }}
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            >
              {[12, 14, 16, 18, 20].map((size) => (
                <option key={size} value={size}>
                  {size}px
                </option>
              ))}
            </select>
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => onThemeChange(e.target.value)}
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            >
              <optgroup label="Dark Themes">
                <option value="dracula">Dracula</option>
                <option value="monokai">Monokai</option>
                <option value="githubDark">GitHub Dark</option>
                <option value="solarizedDark">Solarized Dark</option>
                <option value="vscodeDark">VS Code Dark</option>
                <option value="tokyoNight">Tokyo Night</option>
              </optgroup>
              <optgroup label="Light Themes">
                <option value="githubLight">GitHub Light</option>
                <option value="solarizedLight">Solarized Light</option>
                <option value="vscodeLight">VS Code Light</option>
              </optgroup>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            >
              <option value="javascript">JavaScript</option>
              <option value="cpp">C / C++</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorToolbar;
