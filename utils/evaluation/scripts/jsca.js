const detect = () => {
  const libData = {
    jquery: {
      src: {
        '1.2.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.2.3/jquery.min.js',
        '1.2.6':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.2.6/jquery.min.js',
        '1.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.3.0/jquery.min.js',
        '1.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.3.1/jquery.min.js',
        '1.3.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.3.2/jquery.min.js',
        '1.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.4.0/jquery.min.js',
        '1.4.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.4.1/jquery.min.js',
        '1.4.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.4.2/jquery.min.js',
        '1.4.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.4.3/jquery.min.js',
        '1.4.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.4.4/jquery.min.js',
        '1.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.5.1/jquery.min.js',
        '1.6.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.6.1/jquery.min.js',
        '1.6.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.6.2/jquery.min.js',
        '1.6.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.6.3/jquery.min.js',
        '1.6.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.6.4/jquery.min.js',
        1.7: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js',
        '1.7.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js',
        '1.7.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js',
        '1.8.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js',
        '1.8.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.1/jquery.min.js',
        '1.8.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min.js',
        '1.8.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js',
        '1.9.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.min.js',
        '1.9.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js',
        '1.10.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js',
        '1.10.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.1/jquery.min.js',
        '1.10.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js',
        '1.11.0-beta3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0-beta3/jquery.min.js',
        '1.11.0-rc1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0-rc1/jquery.min.js',
        '1.11.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js',
        '1.11.1-beta1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1-beta1/jquery.min.js',
        '1.11.1-rc1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1-rc1/jquery.min.js',
        '1.11.1-rc2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1-rc2/jquery.min.js',
        '1.11.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js',
        '1.11.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js',
        '1.11.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js',
        '1.12.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js',
        '1.12.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.1/jquery.min.js',
        '1.12.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.2/jquery.min.js',
        '1.12.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.3/jquery.min.js',
        '1.12.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js',
        '2.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js',
        '2.0.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.1/jquery.min.js',
        '2.0.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js',
        '2.0.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js',
        '2.1.0-beta2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0-beta2/jquery.min.js',
        '2.1.0-beta3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0-beta3/jquery.min.js',
        '2.1.0-rc1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0-rc1/jquery.min.js',
        '2.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js',
        '2.1.1-beta1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-beta1/jquery.min.js',
        '2.1.1-rc1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc1/jquery.min.js',
        '2.1.1-rc2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1-rc2/jquery.min.js',
        '2.1.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js',
        '2.1.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.2/jquery.min.js',
        '2.1.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        '2.1.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
        '2.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js',
        '2.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js',
        '2.2.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        '2.2.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js',
        '2.2.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js',
        '3.0.0-alpha1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js',
        '3.0.0-beta1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js',
        '3.0.0-rc1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js',
        '3.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js',
        '3.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
        '3.1.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        '3.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.min.js',
        '3.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
        '3.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js',
        '3.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        '3.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js',
        '3.4.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        '3.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js',
        '3.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
        '3.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        '3.6.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js',
        '3.6.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js',
        '3.6.3':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
        '3.6.4':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js',
        '3.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js',
        '3.7.1':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        '4.0.0-beta':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/4.0.0-beta/jquery.min.js',
        '4.0.0-beta.2':
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/4.0.0-beta.2/jquery.min.js',
      },
      tree: {
        jQuery: {
          length: [[0, 83]],
          name: [[0, 83]],
          arguments: [
            [0, 21],
            [23, 62],
          ],
          caller: [
            [0, 21],
            [23, 62],
          ],
          prototype: [[0, 83]],
          fn: [[0, 83]],
          extend: [[0, 83]],
          noConflict: [[0, 83]],
          isFunction: [[0, 81]],
          isXMLDoc: [[0, 83]],
          globalEval: [[0, 83]],
          nodeName: [[0, 81]],
          cache: [[0, 40]],
          data: [[0, 83]],
          removeData: [[0, 83]],
          each: [[0, 83]],
          prop: [
            [0, 4],
            [11, 83],
          ],
          className: [[0, 4]],
          swap: [
            [0, 35],
            [41, 55],
          ],
          css: [[0, 83]],
          curCSS: [[0, 17]],
          clean: [[0, 21]],
          attr: [[0, 83]],
          trim: [[0, 81]],
          makeArray: [[0, 83]],
          inArray: [[0, 83]],
          merge: [[0, 83]],
          unique: [[0, 81]],
          grep: [[0, 83]],
          map: [[0, 83]],
          browser: [[0, 21]],
          boxModel: [
            [0, 1],
            [5, 17],
          ],
          props: [[0, 10]],
          expr: [[0, 83]],
          parse: [[0, 1]],
          multiFilter: [[0, 4]],
          find: [[0, 83]],
          classFilter: [[0, 1]],
          filter: [[0, 83]],
          dir: [
            [0, 35],
            [41, 55],
            [61, 61],
          ],
          nth: [[0, 17]],
          sibling: [
            [0, 35],
            [41, 55],
            [61, 61],
          ],
          event: [[0, 83]],
          isReady: [[0, 83]],
          readyList: [[0, 4]],
          ready: [[0, 83]],
          get: [[0, 83]],
          getScript: [[0, 83]],
          getJSON: [[0, 83]],
          post: [[0, 83]],
          ajaxSetup: [[0, 83]],
          ajaxSettings: [[0, 83]],
          lastModified: [[0, 83]],
          ajax: [[0, 83]],
          handleError: [[0, 9]],
          active: [[0, 83]],
          httpSuccess: [[0, 9]],
          httpNotModified: [[0, 9]],
          httpData: [[0, 9]],
          param: [[0, 83]],
          speed: [[0, 83]],
          easing: [[0, 83]],
          timers: [[0, 83]],
          fx: [[0, 83]],
          timerId: [[1, 2]],
          isArray: [[2, 81]],
          queue: [[2, 83]],
          dequeue: [[2, 83]],
          Event: [[2, 83]],
          support: [[2, 83]],
          offset: [[2, 83]],
          bindReady: [[5, 17]],
          isPlainObject: [[5, 83]],
          isEmptyObject: [[5, 83]],
          noop: [[5, 83]],
          guid: [[5, 83]],
          proxy: [[5, 83]],
          uaMatch: [[5, 21]],
          expando: [[5, 83]],
          noData: [[5, 40]],
          attrFn: [[5, 21]],
          getText: [[5, 6]],
          contains: [[5, 83]],
          fragments: [[5, 21]],
          style: [[5, 83]],
          etag: [[5, 83]],
          error: [[6, 83]],
          parseJSON: [[6, 81]],
          cleanData: [[6, 83]],
          text: [[7, 83]],
          readyWait: [[8, 83]],
          isWindow: [[8, 81]],
          isNaN: [[8, 14]],
          type: [[8, 81]],
          access: [
            [8, 35],
            [41, 55],
            [61, 61],
          ],
          now: [[8, 81]],
          uuid: [[8, 21]],
          acceptData: [
            [8, 35],
            [41, 55],
            [61, 61],
          ],
          removeEvent: [[8, 83]],
          buildFragment: [
            [8, 35],
            [41, 55],
          ],
          cssHooks: [[8, 83]],
          cssNumber: [[8, 81]],
          cssProps: [[8, 81]],
          camelCase: [[8, 81]],
          handleSuccess: [[8, 9]],
          handleComplete: [[8, 9]],
          triggerGlobal: [[8, 9]],
          parseXML: [[10, 83]],
          _Deferred: [[10, 14]],
          Deferred: [[10, 83]],
          when: [[10, 83]],
          sub: [[10, 21]],
          hasData: [[10, 83]],
          _data: [[10, 83]],
          clone: [[10, 83]],
          ajaxPrefilter: [[10, 83]],
          ajaxTransport: [[10, 83]],
          holdReady: [
            [11, 66],
            [68, 83],
          ],
          _mark: [[11, 17]],
          _unmark: [[11, 17]],
          valHooks: [[11, 83]],
          attrFix: [[11, 14]],
          removeAttr: [[11, 83]],
          attrHooks: [[11, 83]],
          propFix: [[11, 83]],
          propHooks: [[11, 83]],
          isNumeric: [[15, 81]],
          Callbacks: [[15, 83]],
          parseHTML: [[18, 83]],
          deletedIds: [[18, 21]],
          _queueHooks: [[18, 83]],
          Animation: [[18, 83]],
          Tween: [[18, 83]],
          _removeData: [[22, 83]],
          _evalUrl: [[24, 83]],
          uniqueSort: [
            [36, 40],
            [56, 83],
          ],
          htmlPrefilter: [
            [36, 40],
            [56, 83],
          ],
          escapeSelector: [[63, 83]],
          readyException: [[65, 83]],
        },
        $: {
          length: [[0, 83]],
          name: [[0, 83]],
          arguments: [
            [0, 21],
            [23, 62],
          ],
          caller: [
            [0, 21],
            [23, 62],
          ],
          prototype: [[0, 83]],
          fn: [[0, 83]],
          extend: [[0, 83]],
          noConflict: [[0, 83]],
          isFunction: [[0, 81]],
          isXMLDoc: [[0, 83]],
          globalEval: [[0, 83]],
          nodeName: [[0, 81]],
          cache: [[0, 40]],
          data: [[0, 83]],
          removeData: [[0, 83]],
          each: [[0, 83]],
          prop: [
            [0, 4],
            [11, 83],
          ],
          className: [[0, 4]],
          swap: [
            [0, 35],
            [41, 55],
          ],
          css: [[0, 83]],
          curCSS: [[0, 17]],
          clean: [[0, 21]],
          attr: [[0, 83]],
          trim: [[0, 81]],
          makeArray: [[0, 83]],
          inArray: [[0, 83]],
          merge: [[0, 83]],
          unique: [[0, 81]],
          grep: [[0, 83]],
          map: [[0, 83]],
          browser: [[0, 21]],
          boxModel: [
            [0, 1],
            [5, 17],
          ],
          props: [[0, 10]],
          expr: [[0, 83]],
          parse: [[0, 1]],
          multiFilter: [[0, 4]],
          find: [[0, 83]],
          classFilter: [[0, 1]],
          filter: [[0, 83]],
          dir: [
            [0, 35],
            [41, 55],
            [61, 61],
          ],
          nth: [[0, 17]],
          sibling: [
            [0, 35],
            [41, 55],
            [61, 61],
          ],
          event: [[0, 83]],
          isReady: [[0, 83]],
          readyList: [[0, 4]],
          ready: [[0, 83]],
          get: [[0, 83]],
          getScript: [[0, 83]],
          getJSON: [[0, 83]],
          post: [[0, 83]],
          ajaxSetup: [[0, 83]],
          ajaxSettings: [[0, 83]],
          lastModified: [[0, 83]],
          ajax: [[0, 83]],
          handleError: [[0, 9]],
          active: [[0, 83]],
          httpSuccess: [[0, 9]],
          httpNotModified: [[0, 9]],
          httpData: [[0, 9]],
          param: [[0, 83]],
          speed: [[0, 83]],
          easing: [[0, 83]],
          timers: [[0, 83]],
          fx: [[0, 83]],
          timerId: [[1, 2]],
          isArray: [[2, 81]],
          queue: [[2, 83]],
          dequeue: [[2, 83]],
          Event: [[2, 83]],
          support: [[2, 83]],
          offset: [[2, 83]],
          bindReady: [[5, 17]],
          isPlainObject: [[5, 83]],
          isEmptyObject: [[5, 83]],
          noop: [[5, 83]],
          guid: [[5, 83]],
          proxy: [[5, 83]],
          uaMatch: [[5, 21]],
          expando: [[5, 83]],
          noData: [[5, 40]],
          attrFn: [[5, 21]],
          getText: [[5, 6]],
          contains: [[5, 83]],
          fragments: [[5, 21]],
          style: [[5, 83]],
          etag: [[5, 83]],
          error: [[6, 83]],
          parseJSON: [[6, 81]],
          cleanData: [[6, 83]],
          text: [[7, 83]],
          readyWait: [[8, 83]],
          isWindow: [[8, 81]],
          isNaN: [[8, 14]],
          type: [[8, 81]],
          access: [
            [8, 35],
            [41, 55],
            [61, 61],
          ],
          now: [[8, 81]],
          uuid: [[8, 21]],
          acceptData: [
            [8, 35],
            [41, 55],
            [61, 61],
          ],
          removeEvent: [[8, 83]],
          buildFragment: [
            [8, 35],
            [41, 55],
          ],
          cssHooks: [[8, 83]],
          cssNumber: [[8, 81]],
          cssProps: [[8, 81]],
          camelCase: [[8, 81]],
          handleSuccess: [[8, 9]],
          handleComplete: [[8, 9]],
          triggerGlobal: [[8, 9]],
          parseXML: [[10, 83]],
          _Deferred: [[10, 14]],
          Deferred: [[10, 83]],
          when: [[10, 83]],
          sub: [[10, 21]],
          hasData: [[10, 83]],
          _data: [[10, 83]],
          clone: [[10, 83]],
          ajaxPrefilter: [[10, 83]],
          ajaxTransport: [[10, 83]],
          holdReady: [
            [11, 66],
            [68, 83],
          ],
          _mark: [[11, 17]],
          _unmark: [[11, 17]],
          valHooks: [[11, 83]],
          attrFix: [[11, 14]],
          removeAttr: [[11, 83]],
          attrHooks: [[11, 83]],
          propFix: [[11, 83]],
          propHooks: [[11, 83]],
          isNumeric: [[15, 81]],
          Callbacks: [[15, 83]],
          parseHTML: [[18, 83]],
          deletedIds: [[18, 21]],
          _queueHooks: [[18, 83]],
          Animation: [[18, 83]],
          Tween: [[18, 83]],
          _removeData: [[22, 83]],
          _evalUrl: [[24, 83]],
          uniqueSort: [
            [36, 40],
            [56, 83],
          ],
          htmlPrefilter: [
            [36, 40],
            [56, 83],
          ],
          escapeSelector: [[63, 83]],
          readyException: [[65, 83]],
        },
      },
    },
    'lodash.js': {
      src: {
        '0.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.1.0/lodash.min.js',
        '0.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.2.0/lodash.min.js',
        '0.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.2.1/lodash.min.js',
        '0.2.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.2.2/lodash.min.js',
        '0.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.3.0/lodash.min.js',
        '0.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.3.1/lodash.min.js',
        '0.3.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.3.2/lodash.min.js',
        '0.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.4.0/lodash.min.js',
        '0.4.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.4.1/lodash.min.js',
        '0.4.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.4.2/lodash.min.js',
        '0.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.5.0/lodash.min.js',
        '0.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.5.1/lodash.min.js',
        '0.5.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.5.2/lodash.min.js',
        '0.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.6.0/lodash.min.js',
        '0.6.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.6.1/lodash.min.js',
        '0.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.7.0/lodash.min.js',
        '0.8.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.0/lodash.min.js',
        '0.8.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.1/lodash.min.js',
        '0.8.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.8.2/lodash.min.js',
        '0.9.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.0/lodash.min.js',
        '0.9.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.1/lodash.min.js',
        '0.9.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.2/lodash.min.js',
        '0.10.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js',
        '1.0.0-rc.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.1/lodash.min.js',
        '1.0.0-rc.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.2/lodash.min.js',
        '1.0.0-rc.3':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0-rc.3/lodash.min.js',
        '1.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.0/lodash.min.js',
        '1.0.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.1/lodash.min.js',
        '1.0.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.0.2/lodash.min.js',
        '1.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.1.0/lodash.min.js',
        '1.1.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.1.1/lodash.min.js',
        '1.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min.js',
        '1.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.1/lodash.min.js',
        '1.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.0/lodash.min.js',
        '1.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.min.js',
        '2.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.0.0/lodash.min.js',
        '2.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.1.0/lodash.min.js',
        '2.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.2.0/lodash.min.js',
        '2.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.2.1/lodash.min.js',
        '2.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.3.0/lodash.min.js',
        '2.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.0/lodash.min.js',
        '2.4.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js',
        '2.4.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.2/lodash.min.js',
        '3.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.0.0/lodash.min.js',
        '3.0.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.0.1/lodash.min.js',
        '3.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.1.0/lodash.min.js',
        '3.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.min.js',
        '3.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.3.0/lodash.min.js',
        '3.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.3.1/lodash.min.js',
        '3.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.4.0/lodash.min.js',
        '3.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js',
        '3.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.6.0/lodash.min.js',
        '3.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.7.0/lodash.min.js',
        '3.8.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.8.0/lodash.min.js',
        '3.9.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.9.0/lodash.min.js',
        '3.9.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.9.2/lodash.min.js',
        '3.9.3':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.9.3/lodash.min.js',
        '3.10.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min.js',
        '3.10.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js',
        '4.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.0.0/lodash.min.js',
        '4.0.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.0.1/lodash.min.js',
        '4.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.1.0/lodash.min.js',
        '4.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.2.0/lodash.min.js',
        '4.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.2.1/lodash.min.js',
        '4.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.min.js',
        '4.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.4.0/lodash.min.js',
        '4.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.5.0/lodash.min.js',
        '4.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.5.1/lodash.min.js',
        '4.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.0/lodash.min.js',
        '4.6.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js',
        '4.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js',
        '4.8.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.8.0/lodash.min.js',
        '4.8.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.8.1/lodash.min.js',
        '4.8.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.8.2/lodash.min.js',
        '4.9.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.9.0/lodash.min.js',
        '4.10.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.10.0/lodash.min.js',
        '4.11.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.0/lodash.min.js',
        '4.11.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.1/lodash.min.js',
        '4.11.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.11.2/lodash.min.js',
        '4.12.0-amd':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.12.0-amd/lodash.min.js',
        '4.12.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.12.0/lodash.min.js',
        '4.13.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.0/lodash.min.js',
        '4.13.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash.min.js',
        '4.14.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.0/lodash.min.js',
        '4.14.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js',
        '4.14.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.2/lodash.min.js',
        '4.15.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.15.0/lodash.min.js',
        '4.16.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.0/lodash.min.js',
        '4.16.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.1/lodash.min.js',
        '4.16.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.2/lodash.min.js',
        '4.16.3':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.3/lodash.min.js',
        '4.16.4':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.min.js',
        '4.16.5':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.5/lodash.min.js',
        '4.16.6':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.6/lodash.min.js',
        '4.17.0':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.0/lodash.min.js',
        '4.17.1':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.1/lodash.min.js',
        '4.17.2':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js',
        '4.17.3':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.3/lodash.min.js',
        '4.17.4':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js',
        '4.17.5':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.min.js',
        '4.17.9':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.9/lodash.min.js',
        '4.17.10':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js',
        '4.17.11':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js',
        '4.17.12-pre':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.12-pre/lodash.min.js',
        '4.17.12':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.12/lodash.min.js',
        '4.17.13':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.13/lodash.min.js',
        '4.17.14':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.14/lodash.min.js',
        '4.17.15':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js',
        '4.17.16':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.16/lodash.min.js',
        '4.17.19':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.min.js',
        '4.17.20':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js',
        '4.17.21':
          'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js',
      },
      tree: {
        _: {
          length: [[0, 111]],
          name: [[0, 111]],
          prototype: [[0, 111]],
          VERSION: [[0, 111]],
          templateSettings: [[0, 111]],
          after: [[0, 111]],
          bind: [[0, 111]],
          bindAll: [[0, 111]],
          chain: [
            [0, 24],
            [33, 111],
          ],
          clone: [[0, 111]],
          compact: [[0, 111]],
          compose: [[0, 58]],
          contains: [[0, 58]],
          debounce: [[0, 111]],
          defaults: [[0, 111]],
          defer: [[0, 111]],
          delay: [[0, 111]],
          difference: [[0, 111]],
          escape: [[0, 111]],
          every: [[0, 111]],
          extend: [[0, 111]],
          filter: [[0, 111]],
          find: [[0, 111]],
          first: [[0, 111]],
          flatten: [[0, 111]],
          forEach: [[0, 111]],
          functions: [[0, 111]],
          groupBy: [[0, 111]],
          has: [[0, 111]],
          identity: [[0, 111]],
          indexOf: [[0, 111]],
          initial: [[0, 111]],
          intersection: [[0, 111]],
          invoke: [[0, 111]],
          isArguments: [[0, 111]],
          isArray: [[0, 111]],
          isBoolean: [[0, 111]],
          isDate: [[0, 111]],
          isElement: [[0, 111]],
          isEmpty: [[0, 111]],
          isEqual: [[0, 111]],
          isFinite: [[0, 111]],
          isFunction: [[0, 111]],
          isNaN: [[0, 111]],
          isNull: [[0, 111]],
          isNumber: [[0, 111]],
          isObject: [[0, 111]],
          isRegExp: [[0, 111]],
          isString: [[0, 111]],
          isUndefined: [[0, 111]],
          keys: [[0, 111]],
          last: [[0, 111]],
          lastIndexOf: [[0, 111]],
          map: [[0, 111]],
          max: [[0, 111]],
          memoize: [[0, 111]],
          min: [[0, 111]],
          mixin: [[0, 111]],
          noConflict: [[0, 111]],
          once: [[0, 111]],
          pick: [[0, 111]],
          pluck: [[0, 58]],
          range: [[0, 111]],
          reduce: [[0, 111]],
          reduceRight: [[0, 111]],
          reject: [[0, 111]],
          rest: [[0, 111]],
          result: [[0, 111]],
          shuffle: [[0, 111]],
          size: [[0, 111]],
          some: [[0, 111]],
          sortBy: [[0, 111]],
          sortedIndex: [[0, 111]],
          tap: [[0, 111]],
          template: [[0, 111]],
          throttle: [[0, 111]],
          times: [[0, 111]],
          toArray: [[0, 111]],
          union: [[0, 111]],
          uniq: [[0, 111]],
          uniqueId: [[0, 111]],
          values: [[0, 111]],
          without: [[0, 111]],
          wrap: [[0, 111]],
          zip: [[0, 111]],
          all: [[0, 58]],
          any: [[0, 58]],
          collect: [[0, 58]],
          detect: [[0, 58]],
          each: [[0, 111]],
          foldl: [[0, 58]],
          foldr: [[0, 58]],
          head: [[0, 111]],
          include: [[0, 58]],
          inject: [[0, 58]],
          intersect: [[0, 1]],
          methods: [[0, 58]],
          select: [[0, 58]],
          tail: [[0, 111]],
          take: [[0, 111]],
          unique: [[0, 58]],
          partial: [[1, 111]],
          forIn: [[4, 111]],
          forOwn: [[4, 111]],
          zipObject: [
            [7, 14],
            [29, 111],
          ],
          countBy: [[10, 111]],
          drop: [[10, 111]],
          merge: [[10, 111]],
          where: [[10, 58]],
          arguments: [[13, 111]],
          caller: [[13, 111]],
          unescape: [[13, 111]],
          omit: [[13, 111]],
          invert: [[15, 111]],
          object: [[15, 58]],
          pairs: [[15, 58]],
          random: [[15, 111]],
          isPlainObject: [[16, 111]],
          lateBind: [[16, 21]],
          assign: [[22, 111]],
          bindKey: [[22, 111]],
          cloneDeep: [[25, 111]],
          at: [[26, 111]],
          partialRight: [[26, 111]],
          _each: [[28, 28]],
          _iteratorTemplate: [
            [28, 28],
            [42, 42],
          ],
          support: [[29, 58]],
          createCallback: [[29, 42]],
          findIndex: [[29, 111]],
          findKey: [[29, 111]],
          parseInt: [[29, 111]],
          runInContext: [[29, 111]],
          unzip: [[31, 111]],
          transform: [[33, 111]],
          findWhere: [[33, 58]],
          curry: [[35, 111]],
          forEachRight: [[35, 111]],
          forInRight: [[35, 111]],
          forOwnRight: [[35, 111]],
          indexBy: [[35, 58]],
          pull: [[35, 111]],
          remove: [[35, 111]],
          c: [[35, 36]],
          findLast: [[35, 111]],
          findLastIndex: [[35, 111]],
          findLastKey: [[35, 111]],
          sample: [[35, 111]],
          b: [[37, 38]],
          create: [[39, 111]],
          eachRight: [[39, 111]],
          noop: [[39, 111]],
          constant: [[40, 111]],
          mapValues: [[40, 111]],
          property: [[40, 111]],
          xor: [[40, 111]],
          now: [[40, 111]],
          _baseEach: [[42, 42]],
          _shimKeys: [[42, 42]],
          ary: [[43, 111]],
          before: [[43, 111]],
          callback: [[43, 58]],
          chunk: [[43, 111]],
          curryRight: [[43, 111]],
          dropRight: [[43, 111]],
          dropRightWhile: [[43, 111]],
          dropWhile: [[43, 111]],
          flattenDeep: [[43, 111]],
          flow: [[43, 111]],
          flowRight: [[43, 111]],
          keysIn: [[43, 111]],
          matches: [[43, 111]],
          negate: [[43, 111]],
          partition: [[43, 111]],
          propertyOf: [[43, 111]],
          pullAt: [[43, 111]],
          rearg: [[43, 111]],
          slice: [[43, 111]],
          sortByAll: [[43, 58]],
          takeRight: [[43, 111]],
          takeRightWhile: [[43, 111]],
          takeWhile: [[43, 111]],
          thru: [[43, 111]],
          toPlainObject: [[43, 111]],
          valuesIn: [[43, 111]],
          backflow: [[43, 58]],
          iteratee: [[43, 111]],
          attempt: [[43, 111]],
          camelCase: [[43, 111]],
          capitalize: [[43, 111]],
          deburr: [[43, 111]],
          endsWith: [[43, 111]],
          escapeRegExp: [[43, 111]],
          includes: [[43, 111]],
          isError: [[43, 111]],
          isMatch: [[43, 111]],
          isNative: [[43, 111]],
          isTypedArray: [[43, 111]],
          kebabCase: [[43, 111]],
          pad: [[43, 111]],
          padLeft: [[43, 58]],
          padRight: [[43, 58]],
          repeat: [[43, 111]],
          snakeCase: [[43, 111]],
          sortedLastIndex: [[43, 111]],
          startsWith: [[43, 111]],
          trim: [[43, 111]],
          trimLeft: [[43, 58]],
          trimRight: [[43, 58]],
          trunc: [[43, 58]],
          words: [[43, 111]],
          startCase: [[45, 111]],
          fill: [[46, 111]],
          matchesProperty: [[46, 111]],
          spread: [[46, 111]],
          inRange: [[47, 111]],
          sortByOrder: [[49, 58]],
          add: [[49, 111]],
          sum: [[49, 111]],
          restParam: [[51, 58]],
          method: [[52, 111]],
          methodOf: [[52, 111]],
          set: [[52, 111]],
          get: [[52, 111]],
          mapKeys: [[53, 111]],
          unzipWith: [[53, 111]],
          zipWith: [[53, 111]],
          gt: [[54, 111]],
          gte: [[54, 111]],
          lt: [[54, 111]],
          lte: [[54, 111]],
          eq: [[54, 111]],
          defaultsDeep: [[57, 111]],
          modArgs: [[57, 58]],
          ceil: [[57, 111]],
          floor: [[57, 111]],
          round: [[57, 111]],
          assignIn: [[59, 111]],
          assignInWith: [[59, 111]],
          assignWith: [[59, 111]],
          concat: [[59, 111]],
          cond: [[59, 111]],
          conforms: [[59, 111]],
          differenceBy: [[59, 111]],
          differenceWith: [[59, 111]],
          flatMap: [[59, 111]],
          flip: [[59, 111]],
          fromPairs: [[59, 111]],
          functionsIn: [[59, 111]],
          intersectionBy: [[59, 111]],
          intersectionWith: [[59, 111]],
          invokeMap: [[59, 111]],
          keyBy: [[59, 111]],
          mergeWith: [[59, 111]],
          nthArg: [[59, 111]],
          omitBy: [[59, 111]],
          orderBy: [[59, 111]],
          over: [[59, 111]],
          overArgs: [[59, 111]],
          overEvery: [[59, 111]],
          overSome: [[59, 111]],
          pickBy: [[59, 111]],
          pullAll: [[59, 111]],
          pullAllBy: [[59, 111]],
          rangeRight: [[59, 111]],
          reverse: [[59, 111]],
          sampleSize: [[59, 111]],
          setWith: [[59, 111]],
          sortedUniq: [[59, 111]],
          sortedUniqBy: [[59, 111]],
          split: [[59, 111]],
          toPairs: [[59, 111]],
          toPairsIn: [[59, 111]],
          toPath: [[59, 111]],
          unary: [[59, 111]],
          unionBy: [[59, 111]],
          unionWith: [[59, 111]],
          uniqBy: [[59, 111]],
          uniqWith: [[59, 111]],
          unset: [[59, 111]],
          xorBy: [[59, 111]],
          xorWith: [[59, 111]],
          extendWith: [[59, 111]],
          clamp: [[59, 111]],
          cloneDeepWith: [[59, 111]],
          cloneWith: [[59, 111]],
          hasIn: [[59, 111]],
          isArrayLike: [[59, 111]],
          isArrayLikeObject: [[59, 111]],
          isEqualWith: [[59, 111]],
          isInteger: [[59, 111]],
          isLength: [[59, 111]],
          isMatchWith: [[59, 111]],
          isNil: [[59, 111]],
          isObjectLike: [[59, 111]],
          isSafeInteger: [[59, 111]],
          isSymbol: [[59, 111]],
          join: [[59, 111]],
          lowerCase: [[59, 111]],
          lowerFirst: [[59, 111]],
          maxBy: [[59, 111]],
          mean: [[59, 111]],
          minBy: [[59, 111]],
          padEnd: [[59, 111]],
          padStart: [[59, 111]],
          replace: [[59, 111]],
          sortedIndexBy: [[59, 111]],
          sortedIndexOf: [[59, 111]],
          sortedLastIndexBy: [[59, 111]],
          sortedLastIndexOf: [[59, 111]],
          subtract: [[59, 111]],
          sumBy: [[59, 111]],
          toInteger: [[59, 111]],
          toLength: [[59, 111]],
          toLower: [[59, 111]],
          toNumber: [[59, 111]],
          toSafeInteger: [[59, 111]],
          toString: [[59, 111]],
          toUpper: [[59, 111]],
          trimEnd: [[59, 111]],
          trimStart: [[59, 111]],
          truncate: [[59, 111]],
          upperCase: [[59, 111]],
          upperFirst: [[59, 111]],
          invertBy: [[61, 111]],
          zipObjectDeep: [[61, 111]],
          isArrayBuffer: [[64, 111]],
          isBuffer: [[64, 111]],
          isMap: [[64, 111]],
          isSet: [[64, 111]],
          isWeakMap: [[64, 111]],
          isWeakSet: [[64, 111]],
          castArray: [[65, 111]],
          flattenDepth: [[65, 111]],
          pullAllWith: [[68, 111]],
          update: [[68, 111]],
          updateWith: [[68, 111]],
          flatMapDeep: [[70, 111]],
          flatMapDepth: [[70, 111]],
          entries: [[70, 111]],
          entriesIn: [[70, 111]],
          divide: [[70, 111]],
          meanBy: [[70, 111]],
          multiply: [[70, 111]],
          nth: [[76, 111]],
          toFinite: [[79, 111]],
          stubArray: [[81, 111]],
          stubFalse: [[81, 111]],
          stubObject: [[81, 111]],
          stubString: [[81, 111]],
          stubTrue: [[81, 111]],
          conformsTo: [[83, 111]],
          defaultTo: [[83, 111]],
        },
      },
    },
    'moment.js': {
      src: {
        '1.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.0.0/moment.min.js',
        '1.0.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.0.1/moment.min.js',
        '1.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.1.0/moment.min.js',
        '1.1.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.1.1/moment.min.js',
        '1.2.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.2.0/moment.min.js',
        '1.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.3.0/moment.min.js',
        '1.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.4.0/moment.min.js',
        '1.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.5.0/moment.min.js',
        '1.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.5.1/moment.min.js',
        '1.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.6.0/moment.min.js',
        '1.6.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.6.1/moment.min.js',
        '1.6.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.6.2/moment.min.js',
        '1.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.0/moment.min.js',
        '1.7.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.1/moment.min.js',
        '1.7.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.2/moment.min.js',
        '2.0.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.0.0/moment.min.js',
        '2.1.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min.js',
        '2.2.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.2.1/moment.min.js',
        '2.3.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.3.0/moment.min.js',
        '2.3.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.3.1/moment.min.js',
        '2.4.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment.min.js',
        '2.5.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.0/moment.min.js',
        '2.5.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js',
        '2.6.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js',
        '2.7.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js',
        '2.8.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.0/moment.min.js',
        '2.8.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.1/moment.min.js',
        '2.8.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.2/moment.min.js',
        '2.8.3':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.3/moment.min.js',
        '2.8.4':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js',
        '2.9.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment.min.js',
        '2.10.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.0/moment.min.js',
        '2.10.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.1/moment.min.js',
        '2.10.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js',
        '2.10.3':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js',
        '2.10.5':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.5/moment.min.js',
        '2.10.6':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js',
        '2.11.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.0/moment.min.js',
        '2.11.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min.js',
        '2.11.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js',
        '2.12.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment.min.js',
        '2.13.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js',
        '2.14.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.0/moment.min.js',
        '2.14.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.14.1/moment.min.js',
        '2.15.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.0/moment.min.js',
        '2.15.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js',
        '2.15.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.2/moment.min.js',
        '2.16.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.16.0/moment.min.js',
        '2.17.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.0/moment.min.js',
        '2.17.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js',
        '2.18.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.0/moment.min.js',
        '2.18.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js',
        '2.19.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.0/moment.min.js',
        '2.19.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js',
        '2.19.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.2/moment.min.js',
        '2.19.3':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.3/moment.min.js',
        '2.19.4':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment.min.js',
        '2.20.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.0/moment.min.js',
        '2.20.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js',
        '2.21.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js',
        '2.22.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment.min.js',
        '2.22.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js',
        '2.22.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js',
        '2.23.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.23.0/moment.min.js',
        '2.24.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js',
        '2.25.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.0/moment.min.js',
        '2.25.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.1/moment.min.js',
        '2.25.3':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js',
        '2.26.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js',
        '2.27.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js',
        '2.28.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.28.0/moment.min.js',
        '2.29.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js',
        '2.29.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
        '2.29.2':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js',
        '2.29.3':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js',
        '2.29.4':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js',
        '2.30.0':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.0/moment.min.js',
        '2.30.1':
          'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js',
      },
      tree: {
        moment: {
          length: [[0, 77]],
          name: [[0, 77]],
          arguments: [[0, 30]],
          caller: [[0, 30]],
          prototype: [[0, 77]],
          lang: [[0, 77]],
          months: [
            [0, 14],
            [18, 77],
          ],
          monthsShort: [
            [0, 14],
            [18, 77],
          ],
          weekdays: [
            [0, 14],
            [18, 77],
          ],
          weekdaysShort: [
            [0, 14],
            [18, 77],
          ],
          relativeTime: [[0, 14]],
          ordinal: [[0, 14]],
          fn: [[0, 77]],
          version: [[1, 77]],
          longDateFormat: [[2, 14]],
          meridiem: [[4, 14]],
          monthsParse: [[5, 14]],
          calendar: [[5, 14]],
          utc: [[7, 77]],
          humanizeDuration: [[7, 14]],
          defaultFormat: [[7, 77]],
          isMoment: [[7, 77]],
          unix: [[9, 77]],
          duration: [[9, 77]],
          isDuration: [[9, 77]],
          langData: [[12, 77]],
          weekdaysMin: [
            [12, 14],
            [18, 77],
          ],
          updateOffset: [[16, 77]],
          normalizeUnits: [[18, 77]],
          invalid: [[18, 77]],
          parseZone: [[18, 77]],
          suppressDeprecationWarnings: [[23, 77]],
          createFromInputFallback: [[23, 77]],
          momentProperties: [[23, 77]],
          parseTwoDigitYear: [[23, 77]],
          min: [[24, 77]],
          max: [[24, 77]],
          ISO_8601: [[24, 77]],
          relativeTimeThreshold: [[24, 77]],
          locale: [[25, 77]],
          defineLocale: [[25, 77]],
          localeData: [[25, 77]],
          _locale: [[25, 30]],
          isDate: [[30, 77]],
          now: [[37, 77]],
          updateLocale: [[40, 77]],
          locales: [[40, 77]],
          deprecationHandler: [[41, 77]],
          defaultFormatUtc: [[41, 77]],
          relativeTimeRounding: [[42, 77]],
          calendarFormat: [[42, 77]],
          RFC_2822: [[50, 77]],
          HTML5_FMT: [[57, 77]],
        },
      },
    },
  };
  const calcScore = (libData, windowProps) => {
    const allScores = [];
    for (const name in libData) {
      const scores = [];
      const { src, tree } = libData[name];
      const versions = Object.keys(src);
      const all = {};
      const matched = {};
      versions.forEach((version, i) => {
        all[version] = 0;
        matched[version] = 0;
      });
      for (const prop in tree) {
        const subProps = tree[prop];
        const subWindowProps = new Set(windowProps[prop]);
        for (const sub in subProps) {
          const ranges = subProps[sub];
          for (const [fromIndex, toIndex] of ranges) {
            for (let i = fromIndex; i <= toIndex; i++) {
              const version = versions[i];
              all[version] += 1;
              if (subWindowProps.has(sub)) {
                matched[version] += 1;
              }
            }
          }
        }
      }

      for (const version in matched) {
        const count = matched[version];
        const score = (count / all[version]).toFixed(5);
        if (score > 0) {
          scores.push({
            version,
            count,
            all: all[version],
            score,
            src: src[version],
            name,
          });
        }
      }

      allScores.push({
        libName: name,
        detected: scores.length > 0,
        versions: scores.sort((a, b) => {
          if (a.score !== b.score) return b.score - a.score;
          else return b.count - a.count;
        }),
      });
    }

    return allScores;
  };

  const getTargetProperties = (libData) =>
    Object.values(libData).reduce(
      (acc, { tree }) => [...acc, ...Object.keys(tree)],
      []
    );

  const data = {};
  getTargetProperties(libData).forEach((targetProperty) => {
    data[targetProperty] = window[targetProperty]
      ? Object.getOwnPropertyNames(window[targetProperty])
      : [];
  });

  console.log(
    JSON.stringify(
      calcScore(libData, data)
        .filter((lib) => lib.detected)
        .map((lib) => lib.libName)
    )
  );
};

export default detect;
