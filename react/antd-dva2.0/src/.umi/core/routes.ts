// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/git_pro/lh_fullstack/react/antd-dva2.0/node_modules/_@umijs_runtime@3.4.24@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('E:/git_pro/lh_fullstack/react/antd-dva2.0/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('E:/git_pro/lh_fullstack/react/antd-dva2.0/src/page/HelloWorld').default,
        "exact": true
      },
      {
        "path": "/puzzleCards",
        "component": require('E:/git_pro/lh_fullstack/react/antd-dva2.0/src/page/puzzleCards').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
