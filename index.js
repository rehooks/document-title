'use strict';
let { useRef, useEffect } = require('react');

function useDocumentTitle(title, retainOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const defaultTitleCurrent = defaultTitle.current;
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitleCurrent;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

module.exports = useDocumentTitle;
