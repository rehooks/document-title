'use strict';
let { useRef, useEffect } = require('react');

function useDocumentTitle(title, retainOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;

    return () => {
      if (!retainOnUnmount) document.title = defaultTitle.current;
    };
  }, [title]);
}

module.exports = useDocumentTitle;
