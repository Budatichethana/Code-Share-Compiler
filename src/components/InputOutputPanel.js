const InputOutputPanel = ({
  panelHeight,
  isDragging,
  onStartDrag,
  input,
  onInputChange,
  output,
  error,
  isLoading,
}) => {
  return (
    <div
      className="border-t border-slate-700 bg-slate-800 flex flex-col"
      style={{ height: `${panelHeight}vh` }}
    >
      <div
        className={`h-1 cursor-row-resize bg-slate-700/50 transition-colors duration-150 hover:bg-emerald-400/70 ${
          isDragging ? "bg-emerald-400/90" : ""
        }`}
        onMouseDown={onStartDrag}
        role="separator"
        aria-orientation="horizontal"
        aria-label="Resize output panel"
      />

      {/* Input and Output Sections */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Input Section */}
        <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-slate-700">
          <div className="px-4 py-2 border-b border-slate-700 bg-slate-800/80">
            <h3 className="text-sm font-semibold text-slate-300">Input</h3>
          </div>
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Enter input here..."
            className="flex-1 bg-slate-900 text-slate-100 p-4 font-mono text-sm resize-none focus:outline-none placeholder:text-slate-500"
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-2 border-b border-slate-700 bg-slate-800/80">
            <h3 className="text-sm font-semibold text-slate-300">Output</h3>
          </div>
          <div className="flex-1 bg-slate-900 text-slate-100 p-4 font-mono text-sm overflow-auto">
            {isLoading ? (
              <div className="flex items-center gap-2 text-slate-400">
                <div className="animate-spin">⚙️</div>
                <span>Executing code...</span>
              </div>
            ) : error ? (
              <div className="text-red-400">
                <div className="font-semibold mb-2">Error:</div>
                <pre className="whitespace-pre-wrap">{error}</pre>
              </div>
            ) : output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <span className="text-slate-500">Click Run to see output...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputOutputPanel;
