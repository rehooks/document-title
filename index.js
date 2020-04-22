'use strict';
let { useState, useEffect } = require('react');

function useDocumentTitle(title, retainOnUnmount = false) {
  const [defaultTitle, ,] = useState(document.title);

  useEffect(() => {
    document.title = title;

    return () => {
      if (!retainOnUnmount) document.title = defaultTitle;
    };
  }, [title]);
}

module.exports = useDocumentTitle;
