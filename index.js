'use strict';
let { useRef, useEffect } = require('react');

function useDocumentTitle(title, retainOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, []);
}

module.exports = useDocumentTitle;
