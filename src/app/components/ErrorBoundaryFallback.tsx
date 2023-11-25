/* eslint-disable import/named */
import { FallbackProps } from "react-error-boundary";

function ErrorBoundaryFallback({ resetErrorBoundary }: FallbackProps) {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <p>Something Went Wrong. We&apos;re working on getting things fixed.</p>

        <div>
          <button onClick={resetErrorBoundary}>Retry</button>
          <button onClick={reloadPage}>Reload Page</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundaryFallback;
