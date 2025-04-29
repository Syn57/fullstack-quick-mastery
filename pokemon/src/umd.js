// Import React UMD global (assumed loaded via <script> in browser)
const React = window.React;

// Re-export all named exports
export const { Children, Component, Fragment, PureComponent, createElement, useState, useEffect, useRef, useContext, useMemo, useCallback, ...others } = React;

// Export default React
export default React;
