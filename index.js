'use strict';
let { useEffect } = require('react');

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title])
}

module.exports = useDocumentTitle;
