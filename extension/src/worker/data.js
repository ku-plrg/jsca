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
  zepto: {
    src: {
      '0.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.0.1/zepto.min.js',
      '0.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.0.2/zepto.min.js',
      '0.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.0.3/zepto.min.js',
      '0.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.0.4/zepto.min.js',
      0.6: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.6/zepto.min.js',
      0.7: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.7/zepto.min.js',
      0.8: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/0.8/zepto.min.js',
      '1.0': 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js',
      '1.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0.0/zepto.min.js',
      '1.0rc1':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0rc1/zepto.min.js',
      '1.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0.1/zepto.min.js',
      '1.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.1/zepto.min.js',
      '1.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.2/zepto.min.js',
      '1.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.3/zepto.min.js',
      '1.1.4':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.4/zepto.min.js',
      '1.1.5':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.5/zepto.min.js',
      '1.1.6':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js',
      '1.1.7':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.7/zepto.min.js',
      '1.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js',
    },
    tree: {
      Zepto: {
        length: [[0, 18]],
        name: [[0, 18]],
        arguments: [[0, 18]],
        caller: [[0, 18]],
        prototype: [[0, 18]],
        extend: [[0, 18]],
        isFunction: [[0, 18]],
        isObject: [
          [0, 2],
          [4, 6],
          [9, 9],
        ],
        isArray: [[0, 18]],
        isPlainObject: [
          [0, 3],
          [7, 18],
        ],
        inArray: [
          [0, 3],
          [7, 18],
        ],
        trim: [
          [0, 3],
          [7, 18],
        ],
        uuid: [
          [0, 3],
          [7, 18],
        ],
        map: [
          [0, 3],
          [5, 18],
        ],
        each: [
          [0, 3],
          [5, 18],
        ],
        fn: [[0, 18]],
        zepto: [
          [0, 3],
          [7, 18],
        ],
        event: [[0, 18]],
        proxy: [
          [0, 3],
          [7, 18],
        ],
        Event: [
          [0, 3],
          [5, 18],
        ],
        os: [[0, 10]],
        browser: [[0, 10]],
        __detect: [[0, 10]],
        fx: [
          [0, 3],
          [6, 10],
        ],
        active: [
          [0, 3],
          [6, 18],
        ],
        ajaxJSONP: [[0, 18]],
        ajaxSettings: [[0, 18]],
        ajax: [[0, 18]],
        get: [[0, 18]],
        post: [[0, 18]],
        getJSON: [[0, 18]],
        param: [[0, 18]],
        contains: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        type: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        isWindow: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        isEmptyObject: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        camelCase: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        support: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        expr: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        grep: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        parseJSON: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        qsa: [[4, 6]],
        isNumeric: [[18, 18]],
        noop: [[18, 18]],
      },
      $: {
        length: [[0, 18]],
        name: [[0, 18]],
        arguments: [[0, 18]],
        caller: [[0, 18]],
        prototype: [[0, 18]],
        extend: [[0, 18]],
        isFunction: [[0, 18]],
        isObject: [
          [0, 2],
          [4, 6],
          [9, 9],
        ],
        isArray: [[0, 18]],
        isPlainObject: [
          [0, 3],
          [7, 18],
        ],
        inArray: [
          [0, 3],
          [7, 18],
        ],
        trim: [
          [0, 3],
          [7, 18],
        ],
        uuid: [
          [0, 3],
          [7, 18],
        ],
        map: [
          [0, 3],
          [5, 18],
        ],
        each: [
          [0, 3],
          [5, 18],
        ],
        fn: [[0, 18]],
        zepto: [
          [0, 3],
          [7, 18],
        ],
        event: [[0, 18]],
        proxy: [
          [0, 3],
          [7, 18],
        ],
        Event: [
          [0, 3],
          [5, 18],
        ],
        os: [[0, 10]],
        browser: [[0, 10]],
        __detect: [[0, 10]],
        fx: [
          [0, 3],
          [6, 10],
        ],
        active: [
          [0, 3],
          [6, 18],
        ],
        ajaxJSONP: [[0, 18]],
        ajaxSettings: [[0, 18]],
        ajax: [[0, 18]],
        get: [[0, 18]],
        post: [[0, 18]],
        getJSON: [[0, 18]],
        param: [[0, 18]],
        contains: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        type: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        isWindow: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        isEmptyObject: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        camelCase: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        support: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        expr: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        grep: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        parseJSON: [
          [3, 3],
          [7, 8],
          [10, 18],
        ],
        qsa: [[4, 6]],
        isNumeric: [[18, 18]],
        noop: [[18, 18]],
      },
    },
  },
  angular: {
    src: {
      '9.1.12':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/9.1.12/core.umd.min.js',
      '9.1.13':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/9.1.13/core.umd.min.js',
      '10.0.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.1/core.umd.min.js',
      '10.0.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.2/core.umd.min.js',
      '10.0.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.3/core.umd.min.js',
      '10.0.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.4/core.umd.min.js',
      '10.0.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.5/core.umd.min.js',
      '10.0.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-next.6/core.umd.min.js',
      '10.0.0-rc.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-rc.2/core.umd.min.js',
      '10.0.0-rc.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-rc.3/core.umd.min.js',
      '10.0.0-rc.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-rc.4/core.umd.min.js',
      '10.0.0-rc.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0-rc.6/core.umd.min.js',
      '10.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.0/core.umd.min.js',
      '10.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.1/core.umd.min.js',
      '10.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.2/core.umd.min.js',
      '10.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.3/core.umd.min.js',
      '10.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.4/core.umd.min.js',
      '10.0.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.5/core.umd.min.js',
      '10.0.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.6/core.umd.min.js',
      '10.0.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.7/core.umd.min.js',
      '10.0.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.8/core-testing.umd.js',
      '10.0.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.9/core.umd.min.js',
      '10.0.10':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.10/core.umd.min.js',
      '10.0.11':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core.umd.min.js',
      '10.0.12':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.12/core.umd.min.js',
      '10.0.13':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.13/core.umd.min.js',
      '10.0.14':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.14/core.umd.min.js',
      '10.1.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.0/core.umd.min.js',
      '10.1.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.1/core.umd.min.js',
      '10.1.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.2/core.umd.min.js',
      '10.1.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.3/core.umd.min.js',
      '10.1.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.4/core.umd.min.js',
      '10.1.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.5/core.umd.min.js',
      '10.1.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.6/core.umd.min.js',
      '10.1.0-next.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.7/core.umd.min.js',
      '10.1.0-next.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-next.8/core.umd.min.js',
      '10.1.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0-rc.0/core.umd.min.js',
      '10.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.0/core.umd.min.js',
      '10.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.1/core.umd.min.js',
      '10.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.2/core.umd.min.js',
      '10.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.3/core.umd.min.js',
      '10.1.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.4/core.umd.min.js',
      '10.1.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.5/core.umd.min.js',
      '10.1.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.1.6/core.umd.min.js',
      '10.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.0/core.umd.min.js',
      '10.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.1/core.umd.min.js',
      '10.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.2/core.umd.min.js',
      '10.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.3/core.umd.min.js',
      '10.2.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.4/core.umd.min.js',
      '10.2.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/10.2.5/core.umd.min.js',
      '11.0.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.0/core-testing.umd.js',
      '11.0.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.1/core.umd.min.js',
      '11.0.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.2/core.umd.min.js',
      '11.0.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.3/core-testing.umd.js',
      '11.0.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.4/core.umd.min.js',
      '11.0.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.5/core.umd.min.js',
      '11.0.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-next.6/core.umd.min.js',
      '11.0.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-rc.0/core.umd.min.js',
      '11.0.0-rc.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-rc.1/core.umd.min.js',
      '11.0.0-rc.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-rc.2/core-testing.umd.js',
      '11.0.0-rc.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0-rc.3/core.umd.min.js',
      '11.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.0/core.umd.min.js',
      '11.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.1/core.umd.min.js',
      '11.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.2/core-testing.umd.js',
      '11.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.3/core-testing.umd.js',
      '11.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.4/core.umd.min.js',
      '11.0.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.5/core.umd.min.js',
      '11.0.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.6/core.umd.min.js',
      '11.0.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.7/core.umd.min.js',
      '11.0.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.8/core.umd.min.js',
      '11.0.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.0.9/core.umd.min.js',
      '11.1.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.0/core.umd.min.js',
      '11.1.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.1/core.umd.min.js',
      '11.1.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.2/core.umd.min.js',
      '11.1.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.3/core.umd.min.js',
      '11.1.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.4/core.umd.min.js',
      '11.1.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-next.5/core.umd.min.js',
      '11.1.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0-rc.0/core.umd.min.js',
      '11.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.0/core.umd.min.js',
      '11.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.1/core.umd.min.js',
      '11.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.1.2/core.umd.min.js',
      '11.2.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.0-next.0/core.umd.min.js',
      '11.2.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.0-next.1/core.umd.min.js',
      '11.2.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.0-rc.0/core.umd.min.js',
      '11.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.0/core.umd.min.js',
      '11.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.1/core.umd.min.js',
      '11.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.2/core.umd.min.js',
      '11.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.3/core.umd.min.js',
      '11.2.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.4/core.umd.min.js',
      '11.2.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.5/core-testing.umd.js',
      '11.2.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.6/core.umd.min.js',
      '11.2.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.7/core.umd.min.js',
      '11.2.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.8/core.umd.min.js',
      '11.2.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.9/core.umd.min.js',
      '11.2.10':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.10/core.umd.min.js',
      '11.2.11':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.11/core.umd.min.js',
      '11.2.12':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.12/core-testing.umd.js',
      '11.2.13':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.13/core.umd.min.js',
      '11.2.14':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/11.2.14/core.umd.min.js',
      '12.0.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.0/core.umd.min.js',
      '12.0.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.1/core.umd.min.js',
      '12.0.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.2/core.umd.min.js',
      '12.0.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.3/core.umd.min.js',
      '12.0.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.4/core.umd.min.js',
      '12.0.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.5/core.umd.min.js',
      '12.0.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.6/core.umd.min.js',
      '12.0.0-next.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.7/core.umd.min.js',
      '12.0.0-next.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.8/core.umd.min.js',
      '12.0.0-next.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-next.9/core.umd.min.js',
      '12.0.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-rc.0/core.umd.min.js',
      '12.0.0-rc.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-rc.1/core-testing.umd.js',
      '12.0.0-rc.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-rc.2/core.umd.min.js',
      '12.0.0-rc.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0-rc.3/core.umd.min.js',
      '12.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.0/core.umd.min.js',
      '12.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.1/core.umd.min.js',
      '12.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.2/core.umd.min.js',
      '12.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.3/core-testing.umd.js',
      '12.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.4/core.umd.min.js',
      '12.0.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.0.5/core.umd.min.js',
      '12.1.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.1/core.umd.min.js',
      '12.1.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.2/core.umd.min.js',
      '12.1.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.3/core.umd.min.js',
      '12.1.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.4/core.umd.min.js',
      '12.1.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.5/core.umd.min.js',
      '12.1.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0-next.6/core.umd.min.js',
      '12.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.0/core.umd.min.js',
      '12.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.1/core.umd.min.js',
      '12.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.2/core.umd.min.js',
      '12.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.3/core.umd.min.js',
      '12.1.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.4/core.umd.min.js',
      '12.1.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.1.5/core-testing.umd.js',
      '12.2.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0-next.0/core.umd.min.js',
      '12.2.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0-next.1/core.umd.min.js',
      '12.2.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0-next.2/core.umd.min.js',
      '12.2.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0-next.3/core.umd.min.js',
      '12.2.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0-rc.0/core.umd.min.js',
      '12.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.0/core.umd.min.js',
      '12.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.1/core-testing.umd.js',
      '12.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.2/core.umd.min.js',
      '12.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.3/core.umd.min.js',
      '12.2.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.4/core.umd.min.js',
      '12.2.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.5/core-testing.umd.js',
      '12.2.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.6/core-testing.umd.js',
      '12.2.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.7/core.umd.min.js',
      '12.2.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.8/core.umd.min.js',
      '12.2.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.9/core-testing.umd.js',
      '12.2.10':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.10/core.umd.min.js',
      '12.2.11':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.11/core.umd.min.js',
      '12.2.12':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.12/core.umd.min.js',
      '12.2.13':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.13/core.umd.min.js',
      '12.2.14':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.14/core.umd.min.js',
      '12.2.15':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.15/core.umd.min.js',
      '12.2.16':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.16/core.umd.min.js',
      '12.2.17':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.17/core.umd.min.js',
      '13.0.0-next.0':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.0/core.umd.min.js',
      '13.0.0-next.1':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.1/core-testing.umd.js',
      '13.0.0-next.2':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.2/core.umd.min.js',
      '13.0.0-next.3':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.3/core.umd.min.js',
      '13.0.0-next.4':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.4/core.umd.min.js',
      '13.0.0-next.5':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.5/core.umd.min.js',
      '13.0.0-next.6':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.6/core.umd.min.js',
      '13.0.0-next.7':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.7/core.umd.min.js',
      '13.0.0-next.8':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.8/core.umd.min.js',
      '13.0.0-next.9':
        'https://cdnjs.cloudflare.com/ajax/libs/angular/13.0.0-next.9/core.umd.min.js',
    },
    tree: {
      ng: {
        core: [
          [0, 155],
          [162, 169],
        ],
      },
    },
  },
  bootstrap: {
    src: {
      '4.5.3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js',
      '4.6.0':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.min.js',
      '4.6.1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js',
      '4.6.2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/js/bootstrap.min.js',
      '5.0.0-alpha2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0-alpha2/js/bootstrap.min.js',
      '5.0.0-alpha3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0-alpha3/js/bootstrap.min.js',
      '5.0.0-beta1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0-beta1/js/bootstrap.min.js',
      '5.0.0-beta2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0-beta2/js/bootstrap.min.js',
      '5.0.0-beta3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0-beta3/js/bootstrap.min.js',
      '5.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.0/js/bootstrap.min.js',
      '5.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js',
      '5.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/js/bootstrap.min.js',
      '5.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js',
      '5.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/js/bootstrap.min.js',
      '5.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.2/js/bootstrap.min.js',
      '5.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js',
      '5.2.0-beta1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0-beta1/js/bootstrap.min.js',
      '5.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js',
      '5.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js',
      '5.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.min.js',
      '5.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js',
      '5.3.0-alpha1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha1/js/bootstrap.min.js',
      '5.3.0-alpha2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha2/js/bootstrap.min.js',
      '5.3.0-alpha3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha3/js/bootstrap.min.js',
      '5.3.0':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js',
      '5.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js',
      '5.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js',
      '5.3.3':
        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js',
    },
    tree: {
      bootstrap: {
        Alert: [[4, 27]],
        Button: [[4, 27]],
        Carousel: [[4, 27]],
        Collapse: [[4, 27]],
        Dropdown: [[4, 27]],
        Modal: [[4, 27]],
        Popover: [[4, 27]],
        ScrollSpy: [[4, 27]],
        Tab: [[4, 27]],
        Toast: [[4, 27]],
        Tooltip: [[4, 27]],
        Offcanvas: [[8, 27]],
      },
    },
  },
  'backbone.js': {
    src: {
      '0.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.1.1/backbone-min.js',
      '0.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.1.2/backbone-min.js',
      '0.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.2.0/backbone-min.js',
      '0.3.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.3.0/backbone-min.js',
      '0.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.3.1/backbone-min.js',
      '0.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.3.2/backbone-min.js',
      '0.3.3':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.3.3/backbone-min.js',
      0.5: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5/backbone-min.js',
      '0.5.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.0/backbone-min.js',
      '0.5.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.1/backbone-min.js',
      '0.5.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.2/backbone-min.js',
      '0.5.3':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min.js',
      '0.9.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.0/backbone-min.js',
      '0.9.1-amdjs':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.1-amdjs/backbone-amd-min.js',
      '0.9.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.1/backbone-min.js',
      '0.9.2-amdjs':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2-amdjs/backbone-min.js',
      '0.9.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js',
      '0.9.9-amdjs':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.9-amdjs/backbone-min.js',
      '0.9.9':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.9/backbone-min.js',
      '0.9.10':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min.js',
      '1.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js',
      '1.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js',
      '1.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.1/backbone-min.js',
      '1.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js',
      '1.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.0/backbone-min.js',
      '1.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min.js',
      '1.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min.js',
      '1.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js',
      '1.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.1/backbone-min.js',
      '1.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.2/backbone-min.js',
      '1.3.3':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js',
      '1.4.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js',
      '1.4.1':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.1/backbone-min.js',
      '1.5.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.5.0/backbone-min.js',
      '1.6.0':
        'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.6.0/backbone-min.js',
    },
    tree: {
      Backbone: {
        VERSION: [
          [0, 12],
          [14, 14],
          [16, 16],
          [18, 21],
        ],
        Events: [
          [0, 12],
          [14, 14],
          [16, 16],
          [18, 21],
        ],
        Model: [
          [0, 12],
          [14, 14],
          [16, 16],
        ],
        emulateHttp: [[1, 2]],
        emulateHTTP: [
          [3, 12],
          [14, 14],
          [16, 16],
          [18, 21],
        ],
        emulateJSON: [
          [3, 12],
          [14, 14],
          [16, 16],
          [18, 21],
        ],
        noConflict: [
          [7, 12],
          [14, 14],
          [16, 16],
          [18, 21],
        ],
        setDomLibrary: [
          [14, 14],
          [16, 16],
        ],
        $: [[18, 21]],
      },
    },
  },
  'core-js': {
    src: {
      '0.1.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.1.1/core.js',
      '0.1.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.1.2/core.js',
      '0.1.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.1.3/core.js',
      '0.1.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.1.4/core.js',
      '0.1.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.1.5/core.js',
      '0.2.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.0/core.js',
      '0.2.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.1/core.js',
      '0.2.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.2/core.js',
      '0.2.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.3/core.js',
      '0.2.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.4/core.js',
      '0.2.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.2.5/core.js',
      '0.3.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.3.0/core.js',
      '0.3.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.3.1/core.js',
      '0.3.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.3.2/core.js',
      '0.3.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.3.3/core.js',
      '0.4.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.0/core.js',
      '0.4.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.1/core.js',
      '0.4.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.2/core.js',
      '0.4.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.3/core.js',
      '0.4.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.4/core.js',
      '0.4.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.5/core.js',
      '0.4.6': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.6/core.js',
      '0.4.7': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.7/core.js',
      '0.4.8': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.8/core.js',
      '0.4.9': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.9/core.js',
      '0.4.10': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.4.10/core.js',
      '0.5.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.5.0/core.js',
      '0.5.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.5.1/core.js',
      '0.5.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.5.2/core.js',
      '0.5.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.5.3/core.js',
      '0.5.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.5.4/core.js',
      '0.6.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.6.0/core.js',
      '0.6.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.6.1/core.js',
      '0.7.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.7.0/core.js',
      '0.7.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.7.1/core.js',
      '0.7.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.7.2/core.js',
      '0.8.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.8.0/core.js',
      '0.8.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.8.1/core.js',
      '0.8.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.8.2/core.js',
      '0.8.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.8.3/core.js',
      '0.8.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.8.4/core.js',
      '0.9.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.0/core.js',
      '0.9.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.1/core.js',
      '0.9.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.2/core.js',
      '0.9.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.3/core.js',
      '0.9.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.4/core.js',
      '0.9.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.5/core.js',
      '0.9.6': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.6/core.js',
      '0.9.7': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.7/core.js',
      '0.9.8': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.8/core.js',
      '0.9.9': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.9/core.js',
      '0.9.10': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.10/core.js',
      '0.9.11': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.11/core.js',
      '0.9.12': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.12/core.js',
      '0.9.13': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.13/core.js',
      '0.9.14': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.14/core.js',
      '0.9.15': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.15/core.js',
      '0.9.16': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.16/core.js',
      '0.9.17': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.17/core.js',
      '0.9.18': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/0.9.18/core.js',
      '1.0.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.0.0/core.js',
      '1.0.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.0.1/core.js',
      '1.1.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.1.0/core.js',
      '1.1.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.1.1/core.js',
      '1.1.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.1.2/core.js',
      '1.1.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.1.3/core.js',
      '1.1.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.1.4/core.js',
      '1.2.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.0/core.js',
      '1.2.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.1/core.js',
      '1.2.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.2/core.js',
      '1.2.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.3/core.js',
      '1.2.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.4/core.js',
      '1.2.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.5/core.js',
      '1.2.6': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.6/core.js',
      '1.2.7': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/1.2.7/core.js',
      '2.0.0-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.0-alpha/core.js',
      '2.0.0-beta':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.0-beta/core.js',
      '2.0.0-beta.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.0-beta.2/core.js',
      '2.0.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.0/core.js',
      '2.0.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.1/core.js',
      '2.0.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.2/core.js',
      '2.0.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.0.3/core.js',
      '2.1.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.0/core.js',
      '2.1.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.1/core.js',
      '2.1.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.2/core.js',
      '2.1.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.3/core.js',
      '2.1.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.4/core.js',
      '2.1.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.1.5/core.js',
      '2.2.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.2.0/core.js',
      '2.2.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.2.1/core.js',
      '2.2.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.2.2/core.js',
      '2.3.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.3.0/core.js',
      '2.4.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.0/core.js',
      '2.4.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js',
      '2.5.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.0/core.js',
      '2.5.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.1/core.js',
      '2.5.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.2/core.js',
      '2.5.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.js',
      '2.5.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.4/core.js',
      '2.5.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.5/core.js',
      '2.5.6': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.6/core.js',
      '2.5.7': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.7/core.js',
      '2.6.0': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.0/core.js',
      '2.6.1': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.1/core.js',
      '2.6.2': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.2/core.js',
      '2.6.3': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.3/core.js',
      '2.6.4': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.4/core.js',
      '2.6.5': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.5/core.js',
      '2.6.6': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.6/core.js',
      '2.6.7': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.7/core.js',
      '2.6.8': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.8/core.js',
      '2.6.9': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.9/core.js',
      '2.6.10': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.10/core.js',
      '2.6.11': 'https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.11/core.js',
      '3.4.6':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.4.6/minified.js',
      '3.4.7':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.4.7/minified.js',
      '3.4.8':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.4.8/minified.js',
      '3.5.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.5.0/minified.js',
      '3.6.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.0/minified.js',
      '3.6.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.1/minified.js',
      '3.6.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.2/minified.js',
      '3.6.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.3/minified.js',
      '3.6.4':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.4/minified.js',
      '3.6.5':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.6.5/minified.js',
      '3.7.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.7.0/minified.js',
      '3.8.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.8.0/minified.js',
      '3.8.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.8.1/minified.js',
      '3.8.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.8.2/minified.js',
      '3.8.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.8.3/minified.js',
      '3.9.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.9.0/minified.js',
      '3.9.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.9.1/minified.js',
      '3.10.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.10.0/minified.js',
      '3.10.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.10.1/minified.js',
      '3.10.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.10.2/minified.js',
      '3.11.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.11.0/minified.js',
      '3.11.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.11.1/minified.js',
      '3.11.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.11.2/minified.js',
      '3.11.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.11.3/minified.js',
      '3.12.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.12.0/minified.js',
      '3.12.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.12.1/minified.js',
      '3.13.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.13.0/minified.js',
      '3.13.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.13.1/minified.js',
      '3.14.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.14.0/minified.js',
      '3.15.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.15.0/minified.js',
      '3.15.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.15.1/minified.js',
      '3.15.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.15.2/minified.js',
      '3.16.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.16.0/minified.js',
      '3.16.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.16.1/minified.js',
      '3.16.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.16.2/minified.js',
      '3.16.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.16.3/minified.js',
      '3.16.4':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.16.4/minified.js',
      '3.17.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.17.0/minified.js',
      '3.17.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.17.1/minified.js',
      '3.17.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.17.2/minified.js',
      '3.17.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.17.3/minified.js',
      '3.18.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.18.0/minified.js',
      '3.18.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.18.1/minified.js',
      '3.18.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.18.2/minified.js',
      '3.18.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.18.3/minified.js',
      '3.19.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.19.0/minified.js',
      '3.19.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.19.1/minified.js',
      '3.19.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.19.2/minified.js',
      '3.19.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.19.3/minified.js',
      '3.20.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.20.0/minified.js',
      '3.20.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.20.1/minified.js',
      '3.20.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.20.2/minified.js',
      '3.20.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.20.3/minified.js',
      '3.21.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.21.0/minified.js',
      '3.21.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.21.1/minified.js',
      '3.22.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.0/minified.js',
      '3.22.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.1/minified.js',
      '3.22.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.2/minified.js',
      '3.22.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.3/minified.js',
      '3.22.4':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.4/minified.js',
      '3.22.5':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.5/minified.js',
      '3.22.6':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.6/minified.js',
      '3.22.7':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.7/minified.js',
      '3.22.8':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.22.8/minified.js',
      '3.23.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.0/minified.js',
      '3.23.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.1/minified.js',
      '3.23.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.2/minified.js',
      '3.23.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.3/minified.js',
      '3.23.4':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.4/minified.js',
      '3.23.5':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.23.5/minified.js',
      '3.24.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.24.0/minified.js',
      '3.24.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.24.1/minified.js',
      '3.25.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.0/minified.js',
      '3.25.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.1/minified.js',
      '3.25.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.2/minified.js',
      '3.25.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.3/minified.js',
      '3.25.4':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.4/minified.js',
      '3.25.5':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.25.5/minified.js',
      '3.26.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.26.0/minified.js',
      '3.26.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.26.1/minified.js',
      '3.27.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.27.0/minified.js',
      '3.27.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.27.1/minified.js',
      '3.27.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.27.2/minified.js',
      '3.28.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.28.0/minified.js',
      '3.29.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.29.0/minified.js',
      '3.29.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.29.1/minified.js',
      '3.30.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.30.0/minified.js',
      '3.30.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.30.1/minified.js',
      '3.30.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.30.2/minified.js',
      '3.31.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.31.0/minified.js',
      '3.31.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.31.1/minified.js',
      '3.32.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.32.0/minified.js',
      '3.32.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.32.1/minified.js',
      '3.32.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.32.2/minified.js',
      '3.33.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.0/minified.js',
      '3.33.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.1/minified.js',
      '3.33.2':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.2/minified.js',
      '3.33.3':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.3/minified.js',
      '3.34.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.34.0/minified.js',
      '3.35.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.35.0/minified.js',
      '3.35.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.35.1/minified.js',
      '3.36.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.36.0/minified.js',
      '3.36.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.36.1/minified.js',
      '3.37.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.37.0/minified.js',
      '3.37.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.37.1/minified.js',
      '3.38.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.38.0/minified.js',
      '3.38.1':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.38.1/minified.js',
      '3.39.0':
        'https://cdnjs.cloudflare.com/ajax/libs/core-js/3.39.0/minified.js',
    },
    tree: {
      _: {
        toString: [
          [0, 32],
          [36, 40],
        ],
      },
      core: {
        _: [
          [0, 32],
          [36, 113],
        ],
        noConflict: [[0, 32]],
        Object: [[0, 113]],
        Function: [[0, 113]],
        Array: [[0, 113]],
        String: [[0, 113]],
        Date: [[0, 113]],
        global: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Symbol: [[0, 113]],
        Reflect: [
          [0, 32],
          [36, 113],
        ],
        Number: [[0, 113]],
        Math: [[0, 113]],
        setImmediate: [
          [0, 32],
          [36, 113],
        ],
        clearImmediate: [
          [0, 32],
          [36, 113],
        ],
        Promise: [[0, 113]],
        Map: [
          [0, 32],
          [36, 113],
        ],
        Set: [
          [0, 32],
          [36, 113],
        ],
        WeakMap: [
          [0, 32],
          [36, 113],
        ],
        WeakSet: [
          [0, 32],
          [36, 113],
        ],
        $for: [
          [0, 32],
          [36, 59],
        ],
        Dict: [
          [0, 32],
          [36, 113],
        ],
        setTimeout: [
          [0, 32],
          [36, 113],
        ],
        setInterval: [
          [0, 32],
          [36, 113],
        ],
        RegExp: [
          [0, 32],
          [36, 113],
        ],
        locale: [
          [0, 32],
          [36, 59],
        ],
        addLocale: [
          [0, 32],
          [36, 59],
        ],
        console: [[0, 30]],
        delay: [
          [26, 32],
          [36, 113],
        ],
        log: [
          [26, 32],
          [36, 74],
        ],
        isIterable: [[36, 113]],
        getIterator: [[36, 113]],
        inspectSource: [[51, 113]],
        getIteratorMethod: [[60, 113]],
        version: [[67, 113]],
        JSON: [[68, 113]],
        prototype: [[73, 113]],
        System: [[75, 113]],
        Error: [[75, 113]],
        ArrayBuffer: [[76, 113]],
        DataView: [[76, 113]],
        Int8Array: [[76, 113]],
        Uint8Array: [[76, 113]],
        Uint8ClampedArray: [[76, 113]],
        Int16Array: [[76, 113]],
        Uint16Array: [[76, 113]],
        Int32Array: [[76, 113]],
        Uint32Array: [[76, 113]],
        Float32Array: [[76, 113]],
        Float64Array: [[76, 113]],
        parseInt: [[82, 113]],
        parseFloat: [[82, 113]],
        asap: [[91, 113]],
        Observable: [[92, 113]],
        '[object Object]': [[102, 113]],
      },
      global: {
        Object: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Function: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Number: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        parseFloat: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        parseInt: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Infinity: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NaN: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        undefined: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Boolean: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        String: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Symbol: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Date: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Promise: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RegExp: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Error: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AggregateError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EvalError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RangeError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReferenceError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SyntaxError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TypeError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        URIError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        globalThis: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        JSON: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Math: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Intl: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ArrayBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Atomics: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Uint8Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Int8Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Uint16Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Int16Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Uint32Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Int32Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Float32Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Float64Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Uint8ClampedArray: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BigUint64Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BigInt64Array: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DataView: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Map: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BigInt: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Set: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WeakMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WeakSet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Proxy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Reflect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FinalizationRegistry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WeakRef: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        decodeURI: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        decodeURIComponent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        encodeURI: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        encodeURIComponent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        escape: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        unescape: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        eval: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        isFinite: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        isNaN: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Option: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Image: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Audio: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitURL: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitRTCPeerConnection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitMediaStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebKitMutationObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebKitCSSMatrix: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XSLTProcessor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XPathResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XPathExpression: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XPathEvaluator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XMLSerializer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XMLHttpRequestUpload: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XMLHttpRequestEventTarget: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XMLHttpRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XMLDocument: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WritableStreamDefaultWriter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WritableStreamDefaultController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WritableStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Worker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WindowControlsOverlayGeometryChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WindowControlsOverlay: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Window: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WheelEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebSocket: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLVertexArrayObject: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLUniformLocation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLTransformFeedback: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLTexture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLSync: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLShaderPrecisionFormat: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLShader: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLSampler: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLRenderingContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLRenderbuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLQuery: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLProgram: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLObject: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLFramebuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLContextEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGLActiveInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebGL2RenderingContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WaveShaperNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VisualViewport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VisibilityStateEntry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VirtualKeyboardGeometryChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ViewTransition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VideoPlaybackQuality: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VideoFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VideoColorSpace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ValidityState: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VTTCue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        UserActivation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        URLSearchParams: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        URLPattern: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        URL: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        UIEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrustedTypePolicyFactory: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrustedTypePolicy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrustedScriptURL: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrustedScript: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrustedHTML: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TreeWalker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TransitionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TransformStreamDefaultController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TransformStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TrackEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TouchList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TouchEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Touch: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ToggleEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TimeRanges: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextUpdateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextTrackList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextTrackCueList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextTrackCue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextTrack: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextMetrics: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextFormatUpdateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextFormat: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextEncoderStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextDecoderStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TextDecoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Text: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TaskSignal: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TaskPriorityChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TaskController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        TaskAttributionTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SyncManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SubmitEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StyleSheetList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StyleSheet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StylePropertyMapReadOnly: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StylePropertyMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StorageEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Storage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StereoPannerNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StaticRange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SourceBufferList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SourceBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ShadowRoot: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Selection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SecurityPolicyViolationEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ScriptProcessorNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ScreenOrientation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Screen: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Scheduling: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Scheduler: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGViewElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGUseElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGUnitTypes: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTransformList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTransform: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTitleElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTextPositioningElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTextPathElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTextElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTextContentElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGTSpanElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGSymbolElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGSwitchElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGStyleElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGStringList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGStopElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGSetElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGScriptElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGSVGElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGRectElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGRect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGRadialGradientElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPreserveAspectRatio: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPolylineElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPolygonElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPointList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPoint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPatternElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGPathElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGNumberList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGNumber: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGMetadataElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGMatrix: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGMaskElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGMarkerElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGMPathElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGLinearGradientElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGLineElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGLengthList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGLength: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGImageElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGGraphicsElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGGradientElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGGeometryElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGGElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGForeignObjectElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFilterElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFETurbulenceElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFETileElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFESpotLightElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFESpecularLightingElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEPointLightElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEOffsetElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEMorphologyElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEMergeNodeElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEMergeElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEImageElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEGaussianBlurElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEFuncRElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEFuncGElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEFuncBElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEFuncAElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEFloodElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEDropShadowElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEDistantLightElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEDisplacementMapElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEDiffuseLightingElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEConvolveMatrixElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFECompositeElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEComponentTransferElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEColorMatrixElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGFEBlendElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGEllipseElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGDescElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGDefsElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGComponentTransferFunctionElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGClipPathElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGCircleElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimationElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedTransformList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedString: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedRect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedPreserveAspectRatio: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedNumberList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedNumber: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedLengthList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedLength: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedInteger: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedEnumeration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedBoolean: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimatedAngle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimateTransformElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimateMotionElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAnimateElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAngle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SVGAElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Response: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ResizeObserverSize: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ResizeObserverEntry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ResizeObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Request: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReportingObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableStreamDefaultReader: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableStreamDefaultController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableStreamBYOBRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableStreamBYOBReader: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ReadableByteStreamController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Range: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RadioNodeList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCTrackEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCStatsReport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCSessionDescription: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCSctpTransport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCRtpTransceiver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCRtpSender: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCRtpReceiver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCPeerConnectionIceEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCPeerConnectionIceErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCPeerConnection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCIceTransport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCIceCandidate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCEncodedVideoFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCEncodedAudioFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCDtlsTransport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCDataChannelEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCDTMFToneChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCDTMFSender: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCCertificate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PromiseRejectionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ProgressEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Profiler: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ProcessingInstruction: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PopStateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PointerEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PluginArray: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Plugin: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PictureInPictureWindow: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PictureInPictureEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PeriodicWave: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceServerTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceResourceTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformancePaintTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceObserverEntryList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceNavigationTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceNavigation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceMeasure: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceMark: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceLongTaskTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceEventTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceEntry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceElementTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Performance: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Path2D: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PannerNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PageTransitionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OverconstrainedError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OscillatorNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OffscreenCanvasRenderingContext2D: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OffscreenCanvas: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OfflineAudioContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OfflineAudioCompletionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NodeList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NodeIterator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NodeFilter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Node: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NetworkInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigatorUAData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Navigator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationTransition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationHistoryEntry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationDestination: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationCurrentEntryChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Navigation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NamedNodeMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MutationRecord: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MutationObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MouseEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MimeTypeArray: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MimeType: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MessagePort: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MessageEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MessageChannel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrackVideoStats: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrackProcessor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrackGenerator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrackEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrackAudioStats: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamTrack: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamAudioSourceNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStreamAudioDestinationNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaSourceHandle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaSource: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaRecorder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaQueryListEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaQueryList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaEncryptedEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaElementAudioSourceNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaCapabilities: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MathMLElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Location: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LayoutShiftAttribution: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LayoutShift: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LargestContentfulPaint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        KeyframeEffect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        KeyboardEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IntersectionObserverEntry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IntersectionObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        InputEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        InputDeviceInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        InputDeviceCapabilities: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Ink: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageCapture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageBitmapRenderingContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageBitmap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IdleDeadline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IIRFilterNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBVersionChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBTransaction: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBOpenDBRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBObjectStore: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBKeyRange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBIndex: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBFactory: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBDatabase: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBCursorWithValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IDBCursor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        History: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HighlightRegistry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Highlight: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Headers: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HashChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLVideoElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLUnknownElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLUListElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTrackElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTitleElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTimeElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTextAreaElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTemplateElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableSectionElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableRowElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableColElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableCellElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLTableCaptionElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLStyleElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLSpanElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLSourceElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLSlotElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLSelectElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLScriptElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLQuoteElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLProgressElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLPreElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLPictureElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLParamElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLParagraphElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLOutputElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLOptionsCollection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLOptionElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLOptGroupElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLObjectElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLOListElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLModElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMeterElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMetaElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMenuElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMediaElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMarqueeElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLMapElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLLinkElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLLegendElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLLabelElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLLIElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLInputElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLImageElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLIFrameElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLHtmlElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLHeadingElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLHeadElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLHRElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFrameSetElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFrameElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFormElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFormControlsCollection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFontElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFieldSetElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLEmbedElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDocument: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDivElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDirectoryElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDialogElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDetailsElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDataListElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDataElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLDListElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLCollection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLCanvasElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLButtonElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLBodyElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLBaseElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLBRElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLAudioElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLAreaElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLAnchorElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLAllCollection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GeolocationPositionError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GeolocationPosition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GeolocationCoordinates: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Geolocation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GamepadHapticActuator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GamepadEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GamepadButton: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Gamepad: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GainNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FormDataEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FormData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FontFaceSetLoadEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FontFace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FocusEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileReader: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        File: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FeaturePolicy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        External: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EventTarget: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EventSource: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EventCounts: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Event: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EncodedVideoChunk: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EncodedAudioChunk: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ElementInternals: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Element: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EditContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DynamicsCompressorNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DragEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DocumentType: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DocumentTimeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DocumentFragment: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Document: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DelegatedInkTrailPresenter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DelayNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DecompressionStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DataTransferItemList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DataTransferItem: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DataTransfer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMTokenList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMStringMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMStringList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMRectReadOnly: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMRectList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMRect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMQuad: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMPointReadOnly: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMPoint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMParser: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMMatrixReadOnly: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMMatrix: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMImplementation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMException: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DOMError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CustomStateSet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CustomEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CustomElementRegistry: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Crypto: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CountQueuingStrategy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ConvolverNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ContentVisibilityAutoStateChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ConstantSourceNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CompressionStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CompositionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Comment: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CloseWatcher: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CloseEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ClipboardEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CharacterData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CharacterBoundsUpdateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ChannelSplitterNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ChannelMergerNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CanvasRenderingContext2D: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CanvasPattern: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CanvasGradient: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CanvasCaptureMediaStreamTrack: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSVariableReferenceValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSUnparsedValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSUnitValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSTranslate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSTransition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSTransformValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSTransformComponent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSSupportsRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSStyleValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSStyleSheet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSStyleRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSStyleDeclaration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSStartingStyleRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSSkewY: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSSkewX: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSSkew: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSScopeRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSScale: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSRuleList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSRotate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPropertyRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPositionValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPositionTryRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPositionTryDescriptors: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPerspective: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSPageRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSNumericValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSNumericArray: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSNamespaceRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMediaRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMatrixComponent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathSum: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathProduct: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathNegate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathMin: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathMax: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathInvert: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMathClamp: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSLayerStatementRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSLayerBlockRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSKeywordValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSKeyframesRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSKeyframeRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSImportRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSImageValue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSGroupingRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSFontPaletteValuesRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSFontFaceRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSCounterStyleRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSContainerRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSConditionRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSAnimation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSS: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CDATASection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ByteLengthQueuingStrategy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BrowserCaptureMediaStreamTrack: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BroadcastChannel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BlobEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Blob: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BiquadFilterNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BeforeUnloadEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BeforeInstallPromptEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BaseAudioContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BarProp: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioWorkletNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioSinkInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioScheduledSourceNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioProcessingEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioParamMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioParam: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioListener: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioDestinationNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioBufferSourceNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Attr: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AnimationTimeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AnimationPlaybackEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AnimationEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AnimationEffect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Animation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AnalyserNode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AbstractRange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AbortSignal: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AbortController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        window: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        self: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        document: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        name: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        location: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        customElements: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        history: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        navigation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        locationbar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        menubar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        personalbar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scrollbars: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        statusbar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        toolbar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        status: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        closed: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        frames: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        length: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        top: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        opener: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        parent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        frameElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        navigator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        origin: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        external: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        screen: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        innerWidth: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        innerHeight: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scrollX: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        pageXOffset: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scrollY: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        pageYOffset: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        visualViewport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        screenX: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        screenY: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        outerWidth: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        outerHeight: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        devicePixelRatio: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        event: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        clientInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        offscreenBuffering: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        screenLeft: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        screenTop: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        styleMedia: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onsearch: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        isSecureContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        trustedTypes: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        performance: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onappinstalled: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforeinstallprompt: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        crypto: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        indexedDB: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        sessionStorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        localStorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforexrselect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onabort: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforeinput: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforematch: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforetoggle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onblur: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncancel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncanplay: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncanplaythrough: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onclick: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onclose: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncontentvisibilityautostatechange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncontextlost: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncontextmenu: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncontextrestored: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oncuechange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondblclick: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondrag: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondragend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondragenter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondragleave: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondragover: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondragstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondrop: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondurationchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onemptied: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onended: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onerror: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onfocus: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onformdata: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oninput: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        oninvalid: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onkeydown: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onkeypress: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onkeyup: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onload: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onloadeddata: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onloadedmetadata: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onloadstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmousedown: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmouseenter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmouseleave: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmousemove: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmouseout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmouseover: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmouseup: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmousewheel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpause: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onplay: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onplaying: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onprogress: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onratechange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onreset: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onresize: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onscroll: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onsecuritypolicyviolation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onseeked: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onseeking: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onselect: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onslotchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onstalled: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onsubmit: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onsuspend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontimeupdate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontoggle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onvolumechange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwaiting: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwebkitanimationend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwebkitanimationiteration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwebkitanimationstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwebkittransitionend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onwheel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onauxclick: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ongotpointercapture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onlostpointercapture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerdown: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointermove: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerrawupdate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerup: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointercancel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerover: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerenter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpointerleave: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onselectstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onselectionchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onanimationend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onanimationiteration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onanimationstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontransitionrun: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontransitionstart: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontransitionend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ontransitioncancel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onafterprint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforeprint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onbeforeunload: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onhashchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onlanguagechange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmessage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onmessageerror: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onoffline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ononline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpagehide: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpageshow: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpopstate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onrejectionhandled: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onstorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onunhandledrejection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onunload: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        crossOriginIsolated: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scheduler: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        alert: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        atob: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        blur: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        btoa: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        cancelAnimationFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        cancelIdleCallback: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        captureEvents: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        clearInterval: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        clearTimeout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        close: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        confirm: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        createImageBitmap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        fetch: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        find: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        focus: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        getComputedStyle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        getSelection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        matchMedia: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        moveBy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        moveTo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        open: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        postMessage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        print: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        prompt: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        queueMicrotask: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        releaseEvents: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        reportError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        requestAnimationFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        requestIdleCallback: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        resizeBy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        resizeTo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scroll: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scrollBy: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        scrollTo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        setInterval: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        setTimeout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        stop: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        structuredClone: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitCancelAnimationFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitRequestAnimationFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Iterator: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        chrome: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebAssembly: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        caches: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        cookieStore: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondevicemotion: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondeviceorientation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ondeviceorientationabsolute: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        launchQueue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        sharedStorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        documentPictureInPicture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AbsoluteOrientationSensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Accelerometer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioDecoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AudioWorklet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BatteryManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Cache: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CacheStorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Clipboard: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ClipboardItem: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CookieChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CookieStore: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CookieStoreManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Credential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CredentialsContainer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CryptoKey: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DeviceMotionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DeviceMotionEventAcceleration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DeviceMotionEventRotationRate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DeviceOrientationEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FederatedCredential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPU: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUAdapter: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUAdapterInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUBindGroup: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUBindGroupLayout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUBufferUsage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUCanvasContext: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUColorWrite: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUCommandBuffer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUCommandEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUCompilationInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUCompilationMessage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUComputePassEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUComputePipeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUDevice: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUDeviceLostInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUExternalTexture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUInternalError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUMapMode: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUOutOfMemoryError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUPipelineError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUPipelineLayout: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUQuerySet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUQueue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPURenderBundle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPURenderBundleEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPURenderPassEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPURenderPipeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUSampler: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUShaderModule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUShaderStage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUSupportedFeatures: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUSupportedLimits: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUTexture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUTextureUsage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUTextureView: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUUncapturedErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GPUValidationError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        GravitySensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Gyroscope: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IdleDetector: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageDecoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageTrack: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ImageTrackList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Keyboard: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        KeyboardLayoutMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LinearAccelerationSensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Lock: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LockManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIAccess: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIConnectionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIInput: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIInputMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIMessageEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIOutput: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIOutputMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MIDIPort: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaDeviceInfo: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaDevices: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaKeyMessageEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaKeySession: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaKeyStatusMap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaKeySystemAccess: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaKeys: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationPreloadManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigatorManagedData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OrientationSensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PasswordCredential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RelativeOrientationSensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ScreenDetailed: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ScreenDetails: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Sensor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SensorErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ServiceWorker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ServiceWorkerContainer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ServiceWorkerRegistration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StorageManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SubtleCrypto: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VideoDecoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VideoEncoder: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        VirtualKeyboard: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WGSLLanguageFeatures: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebTransport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebTransportBidirectionalStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebTransportDatagramDuplexStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebTransportError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Worklet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRDOMOverlayState: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRLayer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRWebGLBinding: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AuthenticatorAssertionResponse: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AuthenticatorAttestationResponse: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        AuthenticatorResponse: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PublicKeyCredential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BarcodeDetector: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Bluetooth: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothCharacteristicProperties: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothDevice: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothRemoteGATTCharacteristic: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothRemoteGATTDescriptor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothRemoteGATTServer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothRemoteGATTService: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CaptureController: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CookieDeprecationLabel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DocumentPictureInPicture: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        EyeDropper: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FetchLaterResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileSystemDirectoryHandle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileSystemFileHandle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileSystemHandle: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FileSystemWritableFileStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FontData: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FragmentDirective: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HID: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HIDConnectionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HIDDevice: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HIDInputReportEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IdentityCredential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IdentityProvider: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        IdentityCredentialError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LaunchParams: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        LaunchQueue: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigatorLogin: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NotRestoredReasonDetails: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NotRestoredReasons: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        OTPCredential: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentAddress: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentRequestUpdateEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentResponse: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PaymentMethodChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Presentation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationAvailability: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationConnection: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationConnectionAvailableEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationConnectionCloseEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationConnectionList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationReceiver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PresentationRequest: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PressureObserver: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PressureRecord: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ProtectedAudience: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Serial: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SerialPort: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StorageBucket: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        StorageBucketManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USB: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBAlternateInterface: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBConfiguration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBConnectionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBDevice: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBEndpoint: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBInTransferResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBInterface: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBIsochronousInTransferPacket: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBIsochronousInTransferResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBIsochronousOutTransferPacket: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBIsochronousOutTransferResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        USBOutTransferResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WakeLock: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WakeLockSentinel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRAnchor: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRAnchorSet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRBoundedReferenceSpace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRCPUDepthInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRCamera: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRDepthInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRFrame: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRHitTestResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRHitTestSource: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRInputSource: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRInputSourceArray: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRInputSourceEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRInputSourcesChangeEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRLightEstimate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRLightProbe: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRPose: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRRay: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRReferenceSpace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRReferenceSpaceEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRRenderState: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRRigidTransform: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRSession: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRSessionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRSpace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRSystem: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRTransientInputHitTestResult: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRTransientInputHitTestSource: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRView: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRViewerPose: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRViewport: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRWebGLDepthInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRWebGLLayer: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRHand: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRJointPose: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        XRJointSpace: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        fetchLater: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        getScreenDetails: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        queryLocalFonts: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        showDirectoryPicker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        showOpenFilePicker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        showSaveFilePicker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        originAgentCluster: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpageswap: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onpagereveal: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        credentialless: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        fence: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        speechSynthesis: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onscrollend: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onscrollsnapchange: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        onscrollsnapchanging: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BackgroundFetchManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BackgroundFetchRecord: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BackgroundFetchRegistration: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        BluetoothUUID: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSMarginRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSNestedDeclarations: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CSSViewTransitionRule: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CaretPosition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ChapterInformation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        CropTarget: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        DocumentPictureInPictureEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Fence: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        FencedFrameConfig: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        HTMLFencedFrameElement: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaMetadata: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        MediaSession: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        NavigationActivation: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Notification: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PageRevealEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PageSwapEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceLongAnimationFrameTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PerformanceScriptTiming: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PeriodicSyncManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PermissionStatus: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        Permissions: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PushManager: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PushSubscription: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        PushSubscriptionOptions: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RTCDataChannel: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        RemotePlayback: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ScrollTimeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ViewTimeline: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SharedStorage: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SharedStorageWorklet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SharedWorker: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SnapEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SpeechSynthesis: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SpeechSynthesisErrorEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SpeechSynthesisEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SpeechSynthesisUtterance: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        SpeechSynthesisVoice: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        ViewTransitionTypeSet: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebSocketError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        WebSocketStream: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitSpeechGrammar: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitSpeechGrammarList: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitSpeechRecognition: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitSpeechRecognitionError: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitSpeechRecognitionEvent: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitRequestFileSystem: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        webkitResolveLocalFileSystemURL: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        _: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        core: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        global: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        setImmediate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        clearImmediate: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        $for: [
          [0, 32],
          [36, 59],
        ],
        Dict: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        console: [
          [0, 32],
          [36, 59],
          [94, 113],
        ],
        delay: [
          [26, 32],
          [36, 59],
          [94, 113],
        ],
        log: [
          [26, 32],
          [36, 59],
        ],
        '__core-js_shared__': [
          [53, 59],
          [94, 113],
        ],
        System: [[94, 113]],
        asap: [[94, 113]],
        Observable: [[94, 113]],
      },
      setImmediate: {
        length: [
          [0, 32],
          [36, 221],
        ],
        name: [
          [0, 32],
          [36, 221],
        ],
        prototype: [
          [0, 32],
          [36, 221],
        ],
        'Symbol(src)_1.m0mwkwvdut': [[60, 60]],
        'Symbol(src)_1.dejvmozjpe': [[61, 61]],
        'Symbol(src)_1.i45t7c12ni': [[62, 62]],
        'Symbol(src)_1.5ju8tpxv0jg': [[63, 63]],
        'Symbol(src)_1.lawr28m94kl': [[64, 64]],
        'Symbol(src)_1.59fh3titx5': [[65, 65]],
        'Symbol(src)_1.4ac950ole1': [[66, 66]],
        'Symbol(src)_1.vqxblcw8ro': [[67, 67]],
        'Symbol(src)_1.7dul1xzb4i': [[68, 68]],
        'Symbol(src)_1.t42rcgnluw': [[69, 69]],
        'Symbol(src)_1.d2apwd6fu9': [[70, 70]],
        'Symbol(src)_1.w594tfuikr': [[71, 71]],
        'Symbol(src)_1.sx818ziiqz': [[72, 72]],
        'Symbol(src)_1.vo7neg2sq': [[73, 73]],
        'Symbol(src)_1.ml7glxyslpk': [[74, 74]],
        'Symbol(src)_1.z9gj7ulo8r': [[75, 75]],
        'Symbol(src)_1.lmy3lsj1rw': [[76, 76]],
        'Symbol(src)_1.qc6miftw6d': [[77, 77]],
        'Symbol(src)_1.l9mdmf94e6': [[78, 78]],
        'Symbol(src)_1.0z6c6e732lh': [[79, 79]],
        'Symbol(src)_1.9xhcooghoj': [[80, 80]],
        'Symbol(src)_1.100bz1aa9bi': [[81, 81]],
        'Symbol(src)_1.olb33u4a5wi': [[82, 82]],
        'Symbol(src)_1.gev0md1ttj': [[83, 83]],
        'Symbol(src)_1.xu26mz5eml': [[84, 84]],
        'Symbol(src)_1.6tmfecb9l4': [[85, 85]],
        'Symbol(src)_1.kpaqovzunof': [[86, 86]],
        'Symbol(src)_1.25tp0h3tnlf': [[87, 87]],
        'Symbol(src)_1.owikp9a91h': [[88, 88]],
        'Symbol(src)_1.0a0pzny9vv': [[89, 89]],
        'Symbol(src)_1.ymalkz7hy5': [[90, 90]],
        'Symbol(src)_1.htrjdz1op9': [[91, 91]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      clearImmediate: {
        length: [
          [0, 32],
          [36, 221],
        ],
        name: [
          [0, 32],
          [36, 221],
        ],
        prototype: [
          [0, 32],
          [36, 221],
        ],
        'Symbol(src)_1.m0mwkwvdut': [[60, 60]],
        'Symbol(src)_1.dejvmozjpe': [[61, 61]],
        'Symbol(src)_1.i45t7c12ni': [[62, 62]],
        'Symbol(src)_1.5ju8tpxv0jg': [[63, 63]],
        'Symbol(src)_1.lawr28m94kl': [[64, 64]],
        'Symbol(src)_1.59fh3titx5': [[65, 65]],
        'Symbol(src)_1.4ac950ole1': [[66, 66]],
        'Symbol(src)_1.vqxblcw8ro': [[67, 67]],
        'Symbol(src)_1.7dul1xzb4i': [[68, 68]],
        'Symbol(src)_1.t42rcgnluw': [[69, 69]],
        'Symbol(src)_1.d2apwd6fu9': [[70, 70]],
        'Symbol(src)_1.w594tfuikr': [[71, 71]],
        'Symbol(src)_1.sx818ziiqz': [[72, 72]],
        'Symbol(src)_1.vo7neg2sq': [[73, 73]],
        'Symbol(src)_1.ml7glxyslpk': [[74, 74]],
        'Symbol(src)_1.z9gj7ulo8r': [[75, 75]],
        'Symbol(src)_1.lmy3lsj1rw': [[76, 76]],
        'Symbol(src)_1.qc6miftw6d': [[77, 77]],
        'Symbol(src)_1.l9mdmf94e6': [[78, 78]],
        'Symbol(src)_1.0z6c6e732lh': [[79, 79]],
        'Symbol(src)_1.9xhcooghoj': [[80, 80]],
        'Symbol(src)_1.100bz1aa9bi': [[81, 81]],
        'Symbol(src)_1.olb33u4a5wi': [[82, 82]],
        'Symbol(src)_1.gev0md1ttj': [[83, 83]],
        'Symbol(src)_1.xu26mz5eml': [[84, 84]],
        'Symbol(src)_1.6tmfecb9l4': [[85, 85]],
        'Symbol(src)_1.kpaqovzunof': [[86, 86]],
        'Symbol(src)_1.25tp0h3tnlf': [[87, 87]],
        'Symbol(src)_1.owikp9a91h': [[88, 88]],
        'Symbol(src)_1.0a0pzny9vv': [[89, 89]],
        'Symbol(src)_1.ymalkz7hy5': [[90, 90]],
        'Symbol(src)_1.htrjdz1op9': [[91, 91]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      $for: {
        length: [
          [0, 32],
          [36, 59],
        ],
        name: [
          [0, 32],
          [36, 59],
        ],
        prototype: [
          [0, 32],
          [36, 59],
        ],
        isIterable: [
          [0, 32],
          [36, 59],
        ],
        getIterator: [
          [0, 32],
          [36, 59],
        ],
      },
      Dict: {
        length: [
          [0, 32],
          [36, 113],
        ],
        name: [
          [0, 32],
          [36, 113],
        ],
        prototype: [
          [0, 32],
          [36, 113],
        ],
        keys: [
          [0, 32],
          [36, 113],
        ],
        values: [
          [0, 32],
          [36, 113],
        ],
        entries: [
          [0, 32],
          [36, 113],
        ],
        forEach: [
          [0, 32],
          [36, 113],
        ],
        map: [
          [0, 32],
          [36, 113],
        ],
        filter: [
          [0, 32],
          [36, 113],
        ],
        some: [
          [0, 32],
          [36, 113],
        ],
        every: [
          [0, 32],
          [36, 113],
        ],
        find: [
          [0, 32],
          [36, 113],
        ],
        findKey: [
          [0, 32],
          [36, 113],
        ],
        reduce: [
          [0, 32],
          [36, 113],
        ],
        turn: [
          [0, 32],
          [36, 59],
        ],
        keyOf: [
          [0, 32],
          [36, 113],
        ],
        contains: [[0, 4]],
        has: [
          [0, 32],
          [36, 113],
        ],
        get: [
          [0, 32],
          [36, 113],
        ],
        set: [
          [0, 32],
          [36, 113],
        ],
        isDict: [
          [0, 32],
          [36, 113],
        ],
        includes: [
          [2, 32],
          [36, 113],
        ],
        mapPairs: [
          [3, 32],
          [36, 113],
        ],
        arguments: [[36, 40]],
        caller: [[36, 40]],
        'Symbol(src)_1.m0mwkwvdut': [[60, 60]],
        'Symbol(src)_1.dejvmozjpe': [[61, 61]],
        'Symbol(src)_1.i45t7c12ni': [[62, 62]],
        'Symbol(src)_1.5ju8tpxv0jg': [[63, 63]],
        'Symbol(src)_1.lawr28m94kl': [[64, 64]],
        'Symbol(src)_1.59fh3titx5': [[65, 65]],
        'Symbol(src)_1.4ac950ole1': [[66, 66]],
        'Symbol(src)_1.vqxblcw8ro': [[67, 67]],
        'Symbol(src)_1.7dul1xzb4i': [[68, 68]],
        'Symbol(src)_1.t42rcgnluw': [[69, 69]],
        'Symbol(src)_1.d2apwd6fu9': [[70, 70]],
        'Symbol(src)_1.w594tfuikr': [[71, 71]],
        'Symbol(src)_1.sx818ziiqz': [[72, 72]],
        'Symbol(src)_1.vo7neg2sq': [[73, 73]],
        'Symbol(src)_1.ml7glxyslpk': [[74, 74]],
        'Symbol(src)_1.z9gj7ulo8r': [[75, 75]],
        'Symbol(src)_1.lmy3lsj1rw': [[76, 76]],
        'Symbol(src)_1.qc6miftw6d': [[77, 77]],
        'Symbol(src)_1.l9mdmf94e6': [[78, 78]],
        'Symbol(src)_1.0z6c6e732lh': [[79, 79]],
        'Symbol(src)_1.9xhcooghoj': [[80, 80]],
        'Symbol(src)_1.100bz1aa9bi': [[81, 81]],
        'Symbol(src)_1.olb33u4a5wi': [[82, 82]],
        'Symbol(src)_1.gev0md1ttj': [[83, 83]],
        'Symbol(src)_1.xu26mz5eml': [[84, 84]],
        'Symbol(src)_1.6tmfecb9l4': [[85, 85]],
        'Symbol(src)_1.kpaqovzunof': [[86, 86]],
        'Symbol(src)_1.25tp0h3tnlf': [[87, 87]],
        'Symbol(src)_1.owikp9a91h': [[88, 88]],
        'Symbol(src)_1.0a0pzny9vv': [[89, 89]],
        'Symbol(src)_1.ymalkz7hy5': [[90, 90]],
        'Symbol(src)_1.htrjdz1op9': [[91, 91]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      delay: {
        length: [
          [26, 32],
          [36, 113],
        ],
        name: [
          [26, 32],
          [36, 113],
        ],
        prototype: [
          [26, 32],
          [36, 113],
        ],
        arguments: [[36, 40]],
        caller: [[36, 40]],
        'Symbol(src)_1.m0mwkwvdut': [[60, 60]],
        'Symbol(src)_1.dejvmozjpe': [[61, 61]],
        'Symbol(src)_1.i45t7c12ni': [[62, 62]],
        'Symbol(src)_1.5ju8tpxv0jg': [[63, 63]],
        'Symbol(src)_1.lawr28m94kl': [[64, 64]],
        'Symbol(src)_1.59fh3titx5': [[65, 65]],
        'Symbol(src)_1.4ac950ole1': [[66, 66]],
        'Symbol(src)_1.vqxblcw8ro': [[67, 67]],
        'Symbol(src)_1.7dul1xzb4i': [[68, 68]],
        'Symbol(src)_1.t42rcgnluw': [[69, 69]],
        'Symbol(src)_1.d2apwd6fu9': [[70, 70]],
        'Symbol(src)_1.w594tfuikr': [[71, 71]],
        'Symbol(src)_1.sx818ziiqz': [[72, 72]],
        'Symbol(src)_1.vo7neg2sq': [[73, 73]],
        'Symbol(src)_1.ml7glxyslpk': [[74, 74]],
        'Symbol(src)_1.z9gj7ulo8r': [[75, 75]],
        'Symbol(src)_1.lmy3lsj1rw': [[76, 76]],
        'Symbol(src)_1.qc6miftw6d': [[77, 77]],
        'Symbol(src)_1.l9mdmf94e6': [[78, 78]],
        'Symbol(src)_1.0z6c6e732lh': [[79, 79]],
        'Symbol(src)_1.9xhcooghoj': [[80, 80]],
        'Symbol(src)_1.100bz1aa9bi': [[81, 81]],
        'Symbol(src)_1.olb33u4a5wi': [[82, 82]],
        'Symbol(src)_1.gev0md1ttj': [[83, 83]],
        'Symbol(src)_1.xu26mz5eml': [[84, 84]],
        'Symbol(src)_1.6tmfecb9l4': [[85, 85]],
        'Symbol(src)_1.kpaqovzunof': [[86, 86]],
        'Symbol(src)_1.25tp0h3tnlf': [[87, 87]],
        'Symbol(src)_1.owikp9a91h': [[88, 88]],
        'Symbol(src)_1.0a0pzny9vv': [[89, 89]],
        'Symbol(src)_1.ymalkz7hy5': [[90, 90]],
        'Symbol(src)_1.htrjdz1op9': [[91, 91]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      log: {
        length: [
          [26, 32],
          [36, 74],
        ],
        name: [
          [26, 32],
          [36, 74],
        ],
        prototype: [
          [26, 32],
          [36, 74],
        ],
        assert: [
          [26, 32],
          [36, 74],
        ],
        clear: [
          [26, 32],
          [36, 74],
        ],
        count: [
          [26, 32],
          [36, 74],
        ],
        debug: [
          [26, 32],
          [36, 74],
        ],
        dir: [
          [26, 32],
          [36, 74],
        ],
        dirxml: [
          [26, 32],
          [36, 74],
        ],
        error: [
          [26, 32],
          [36, 74],
        ],
        exception: [
          [26, 32],
          [36, 74],
        ],
        group: [
          [26, 32],
          [36, 74],
        ],
        groupCollapsed: [
          [26, 32],
          [36, 74],
        ],
        groupEnd: [
          [26, 32],
          [36, 74],
        ],
        info: [
          [26, 32],
          [36, 74],
        ],
        isIndependentlyComposed: [
          [26, 32],
          [36, 74],
        ],
        log: [
          [26, 32],
          [36, 74],
        ],
        markTimeline: [
          [26, 32],
          [36, 74],
        ],
        profile: [
          [26, 32],
          [36, 74],
        ],
        profileEnd: [
          [26, 32],
          [36, 74],
        ],
        table: [
          [26, 32],
          [36, 74],
        ],
        time: [
          [26, 32],
          [36, 74],
        ],
        timeEnd: [
          [26, 32],
          [36, 74],
        ],
        timeline: [
          [26, 32],
          [36, 74],
        ],
        timelineEnd: [
          [26, 32],
          [36, 74],
        ],
        timeStamp: [
          [26, 32],
          [36, 74],
        ],
        trace: [
          [26, 32],
          [36, 74],
        ],
        warn: [
          [26, 32],
          [36, 74],
        ],
        enable: [
          [26, 32],
          [36, 74],
        ],
        disable: [
          [26, 32],
          [36, 74],
        ],
        arguments: [[36, 40]],
        caller: [[36, 40]],
        'Symbol(src)_1.m0mwkwvdut': [[60, 60]],
        'Symbol(src)_1.dejvmozjpe': [[61, 61]],
        'Symbol(src)_1.i45t7c12ni': [[62, 62]],
        'Symbol(src)_1.5ju8tpxv0jg': [[63, 63]],
        'Symbol(src)_1.lawr28m94kl': [[64, 64]],
        'Symbol(src)_1.59fh3titx5': [[65, 65]],
        'Symbol(src)_1.4ac950ole1': [[66, 66]],
        'Symbol(src)_1.vqxblcw8ro': [[67, 67]],
        'Symbol(src)_1.7dul1xzb4i': [[68, 68]],
        'Symbol(src)_1.t42rcgnluw': [[69, 69]],
        'Symbol(src)_1.d2apwd6fu9': [[70, 70]],
        'Symbol(src)_1.w594tfuikr': [[71, 71]],
        'Symbol(src)_1.sx818ziiqz': [[72, 72]],
        'Symbol(src)_1.vo7neg2sq': [[73, 73]],
        'Symbol(src)_1.ml7glxyslpk': [[74, 74]],
      },
      '__core-js_shared__': {
        wks: [[53, 221]],
        'symbol-registry': [[53, 113]],
        symbols: [[53, 221]],
        iterators: [[53, 59]],
        keys: [[82, 221]],
        metadata: [[82, 221]],
        'op-symbols': [[92, 221]],
        versions: [[100, 221]],
        'native-function-to-string': [[106, 113]],
        inspectSource: [[114, 221]],
        'string-to-symbol-registry': [[114, 221]],
        'symbol-to-string-registry': [[114, 221]],
        state: [[124, 221]],
        'native-string-replace': [[131, 221]],
        GlobalDedentRegistry: [[194, 210]],
      },
      System: {
        global: [[75, 113]],
      },
      asap: {
        length: [[91, 113]],
        name: [[91, 113]],
        prototype: [[91, 113]],
        'Symbol(src)_1.htrjdz1op9': [[91, 91]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      Observable: {
        length: [[92, 221]],
        name: [[92, 221]],
        prototype: [[92, 221]],
        from: [[92, 221]],
        of: [[92, 221]],
        'Symbol(src)_1.xdccrp34ld': [[92, 92]],
        'Symbol(src)_1.louatz9k0kf': [[93, 93]],
        'Symbol(src)_1.ono6mo0mlo': [[94, 94]],
        'Symbol(src)_1.gtqz5kmfow': [[95, 95]],
        'Symbol(src)_1.vrt0trbjztf': [[96, 96]],
        'Symbol(src)_1.xlejl2r9cq': [[97, 97]],
        'Symbol(src)_1.uxbypy3ul4': [[98, 98]],
        'Symbol(src)_1.0ywchghpmp': [[99, 99]],
        'Symbol(src)_1.t8znj5ic3g': [[100, 100]],
        'Symbol(src)_1.q4xsbo9n9tf': [[101, 101]],
        'Symbol(src)_1.95rg4rf86bh': [[102, 102]],
        'Symbol(src)_1.nhp8g5s5w2': [[103, 103]],
        'Symbol(src)_1.bnsl4sp33u': [[104, 104]],
        'Symbol(src)_1.1fpgkqzhz7': [[105, 105]],
        'Symbol(src)_1.db2mujrvpm': [[106, 106]],
        'Symbol(src)_1.1eq33r5kfol': [[107, 107]],
        'Symbol(src)_1.gem0jmhj2y': [[108, 108]],
        'Symbol(src)_1.w21qnbd8sy': [[109, 109]],
        'Symbol(src)_1.oejjbn8dj9g': [[110, 110]],
        'Symbol(src)_1.pvgdr5zbbw': [[111, 111]],
        'Symbol(src)_1.l6w2rdfgt5': [[112, 112]],
        'Symbol(src)_1.0rzizszai7': [[113, 113]],
      },
      AsyncIterator: {
        length: [[114, 221]],
        name: [[114, 221]],
        prototype: [[114, 221]],
        from: [[114, 221]],
      },
      compositeKey: {
        length: [[114, 221]],
        name: [[114, 221]],
        prototype: [[114, 221]],
      },
      compositeSymbol: {
        length: [[114, 221]],
        name: [[114, 221]],
        prototype: [[114, 221]],
      },
      SuppressedError: {
        length: [[194, 221]],
        name: [[194, 221]],
        prototype: [[194, 221]],
      },
      AsyncDisposableStack: {
        length: [[194, 221]],
        name: [[194, 221]],
        prototype: [[194, 221]],
      },
      DisposableStack: {
        length: [[194, 221]],
        name: [[194, 221]],
        prototype: [[194, 221]],
      },
    },
  },
  'underscore.js': {
    src: {
      '0.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.1.0/underscore-min.js',
      '0.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.1.1/underscore-min.js',
      '0.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.2.0/underscore-min.js',
      '0.3.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.3.0/underscore-min.js',
      '0.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.3.1/underscore-min.js',
      '0.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.3.2/underscore-min.js',
      '0.3.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.3.3/underscore-min.js',
      '0.4.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.0/underscore-min.js',
      '0.4.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.1/underscore-min.js',
      '0.4.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.2/underscore-min.js',
      '0.4.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.3/underscore-min.js',
      '0.4.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.4/underscore-min.js',
      '0.4.5':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.5/underscore-min.js',
      '0.4.6':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.6/underscore-min.js',
      '0.4.7':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.4.7/underscore-min.js',
      '0.5.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.0/underscore-min.js',
      '0.5.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.1/underscore-min.js',
      '0.5.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.2/underscore-min.js',
      '0.5.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.3/underscore-min.js',
      '0.5.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.4/underscore-min.js',
      '0.5.5':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.5/underscore-min.js',
      '0.5.6':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.6/underscore-min.js',
      '0.5.7':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.7/underscore-min.js',
      '0.5.8':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.5.8/underscore-min.js',
      '0.6.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/0.6.0/underscore-min.js',
      '1.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.0.0/underscore-min.js',
      '1.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.0.1/underscore-min.js',
      '1.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.0.2/underscore-min.js',
      '1.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.0.3/underscore-min.js',
      '1.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.0.4/underscore-min.js',
      '1.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.0/underscore-min.js',
      '1.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.1/underscore-min.js',
      '1.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.2/underscore-min.js',
      '1.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.3/underscore-min.js',
      '1.1.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.4/underscore-min.js',
      '1.1.5':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.5/underscore-min.js',
      '1.1.6':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.6/underscore-min.js',
      '1.1.7':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min.js',
      '1.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.0/underscore-min.js',
      '1.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.1/underscore-min.js',
      '1.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.2/underscore-min.js',
      '1.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.3/underscore-min.js',
      '1.2.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.4/underscore-min.js',
      '1.3.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.0/underscore-min.js',
      '1.3.1-amdjs':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.1-amdjs/underscore-amd-min.js',
      '1.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.1/underscore-min.js',
      '1.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.2/underscore-min.js',
      '1.3.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js',
      '1.4.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.0/underscore-min.js',
      '1.4.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.1/underscore-min.js',
      '1.4.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min.js',
      '1.4.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min.js',
      '1.4.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js',
      '1.5.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.0/underscore-min.js',
      '1.5.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js',
      '1.5.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
      '1.6.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js',
      '1.7.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js',
      '1.8.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.0/underscore-min.js',
      '1.8.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.1/underscore-min.js',
      '1.8.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js',
      '1.8.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
      '1.9.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.0/underscore-min.js',
      '1.9.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js',
      '1.9.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.2/underscore-min.js',
      '1.10.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.10.0/underscore-min.js',
      '1.10.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.10.1/underscore-min.js',
      '1.10.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.10.2/underscore-min.js',
      '1.11.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.11.0/underscore-min.js',
      '1.12.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.12.0/underscore-min.js',
      '1.12.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.12.1/underscore-min.js',
      '1.13.0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.0/underscore-esm-min.js',
      '1.13.0-0':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.0-0/underscore-esm-min.js',
      '1.13.0-3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.0-3/underscore-esm-min.js',
      '1.13.1':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js',
      '1.13.2':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min.js',
      '1.13.3':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.3/underscore-min.js',
      '1.13.4':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.4/underscore-min.js',
      '1.13.5':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.5/underscore-min.js',
      '1.13.6':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js',
      '1.13.7':
        'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.7/underscore-min.js',
    },
    tree: {
      _: {
        VERSION: [
          [0, 70],
          [74, 80],
        ],
        each: [
          [0, 70],
          [74, 80],
        ],
        map: [
          [0, 70],
          [74, 80],
        ],
        inject: [
          [0, 70],
          [74, 80],
        ],
        detect: [
          [0, 70],
          [74, 80],
        ],
        select: [
          [0, 70],
          [74, 80],
        ],
        reject: [
          [0, 70],
          [74, 80],
        ],
        all: [
          [0, 70],
          [74, 80],
        ],
        any: [
          [0, 70],
          [74, 80],
        ],
        include: [
          [0, 70],
          [74, 80],
        ],
        invoke: [
          [0, 70],
          [74, 80],
        ],
        pluck: [
          [0, 70],
          [74, 80],
        ],
        max: [
          [0, 70],
          [74, 80],
        ],
        min: [
          [0, 70],
          [74, 80],
        ],
        sortBy: [
          [0, 70],
          [74, 80],
        ],
        sortedIndex: [
          [0, 70],
          [74, 80],
        ],
        toArray: [
          [0, 70],
          [74, 80],
        ],
        size: [
          [0, 70],
          [74, 80],
        ],
        first: [
          [0, 70],
          [74, 80],
        ],
        last: [
          [0, 70],
          [74, 80],
        ],
        compact: [
          [0, 70],
          [74, 80],
        ],
        flatten: [
          [0, 70],
          [74, 80],
        ],
        without: [
          [0, 70],
          [74, 80],
        ],
        uniq: [
          [0, 70],
          [74, 80],
        ],
        intersect: [[0, 47]],
        zip: [
          [0, 70],
          [74, 80],
        ],
        indexOf: [
          [0, 70],
          [74, 80],
        ],
        bind: [
          [0, 70],
          [74, 80],
        ],
        bindAll: [
          [0, 70],
          [74, 80],
        ],
        delay: [
          [0, 70],
          [74, 80],
        ],
        defer: [
          [0, 70],
          [74, 80],
        ],
        wrap: [
          [0, 70],
          [74, 80],
        ],
        keys: [
          [0, 70],
          [74, 80],
        ],
        values: [
          [0, 70],
          [74, 80],
        ],
        extend: [
          [0, 70],
          [74, 80],
        ],
        clone: [
          [0, 70],
          [74, 80],
        ],
        isEqual: [
          [0, 70],
          [74, 80],
        ],
        isElement: [
          [0, 70],
          [74, 80],
        ],
        isArray: [
          [0, 70],
          [74, 80],
        ],
        isFunction: [
          [0, 70],
          [74, 80],
        ],
        isUndefined: [
          [0, 70],
          [74, 80],
        ],
        uniqueId: [
          [0, 70],
          [74, 80],
        ],
        template: [
          [0, 70],
          [74, 80],
        ],
        PREVIOUS_UNDERSCORE: [[1, 1]],
        noConflict: [
          [1, 70],
          [74, 80],
        ],
        reduce: [
          [2, 70],
          [74, 80],
        ],
        lastIndexOf: [
          [2, 70],
          [74, 80],
        ],
        compose: [
          [2, 70],
          [74, 80],
        ],
        forEach: [
          [2, 70],
          [74, 80],
        ],
        filter: [
          [2, 70],
          [74, 80],
        ],
        every: [
          [2, 70],
          [74, 80],
        ],
        some: [
          [2, 70],
          [74, 80],
        ],
        identity: [
          [5, 70],
          [74, 80],
        ],
        reduceRight: [
          [6, 70],
          [74, 80],
        ],
        foldl: [
          [6, 70],
          [74, 80],
        ],
        foldr: [
          [6, 70],
          [74, 80],
        ],
        length: [
          [7, 70],
          [74, 80],
        ],
        name: [
          [7, 70],
          [74, 80],
        ],
        arguments: [
          [7, 70],
          [74, 80],
        ],
        caller: [
          [7, 70],
          [74, 80],
        ],
        prototype: [
          [7, 70],
          [74, 80],
        ],
        functions: [
          [7, 70],
          [74, 80],
        ],
        methods: [
          [7, 70],
          [74, 80],
        ],
        isEmpty: [
          [8, 70],
          [74, 80],
        ],
        breakLoop: [[8, 32]],
        isString: [
          [11, 70],
          [74, 80],
        ],
        isNumber: [
          [11, 70],
          [74, 80],
        ],
        rest: [
          [12, 70],
          [74, 80],
        ],
        head: [
          [12, 70],
          [74, 80],
        ],
        tail: [
          [12, 70],
          [74, 80],
        ],
        range: [
          [13, 70],
          [74, 80],
        ],
        isDate: [
          [14, 70],
          [74, 80],
        ],
        isNaN: [
          [14, 70],
          [74, 80],
        ],
        isNull: [
          [14, 70],
          [74, 80],
        ],
        isRegExp: [
          [15, 70],
          [74, 80],
        ],
        isArguments: [
          [16, 70],
          [74, 80],
        ],
        tap: [
          [17, 70],
          [74, 80],
        ],
        templateSettings: [
          [21, 70],
          [74, 80],
        ],
        times: [
          [24, 70],
          [74, 80],
        ],
        mixin: [
          [24, 70],
          [74, 80],
        ],
        isBoolean: [
          [25, 70],
          [74, 80],
        ],
        memoize: [
          [29, 70],
          [74, 80],
        ],
        contains: [
          [30, 70],
          [74, 80],
        ],
        find: [
          [32, 70],
          [74, 80],
        ],
        unique: [
          [32, 70],
          [74, 80],
        ],
        throttle: [
          [33, 70],
          [74, 80],
        ],
        debounce: [
          [33, 70],
          [74, 80],
        ],
        once: [
          [35, 70],
          [74, 80],
        ],
        defaults: [
          [35, 70],
          [74, 80],
        ],
        after: [
          [36, 70],
          [74, 80],
        ],
        groupBy: [
          [37, 70],
          [74, 80],
        ],
        union: [
          [37, 70],
          [74, 80],
        ],
        intersection: [
          [37, 70],
          [74, 80],
        ],
        difference: [
          [37, 70],
          [74, 80],
        ],
        isObject: [
          [37, 70],
          [74, 80],
        ],
        shuffle: [
          [38, 70],
          [74, 80],
        ],
        initial: [
          [38, 70],
          [74, 80],
        ],
        escape: [
          [38, 70],
          [74, 80],
        ],
        chain: [
          [42, 70],
          [74, 80],
        ],
        collect: [
          [44, 70],
          [74, 80],
        ],
        has: [
          [44, 70],
          [74, 80],
        ],
        take: [
          [46, 70],
          [74, 80],
        ],
        pick: [
          [46, 70],
          [74, 80],
        ],
        isFinite: [
          [46, 70],
          [74, 80],
        ],
        result: [
          [46, 70],
          [74, 80],
        ],
        where: [
          [48, 70],
          [74, 80],
        ],
        countBy: [
          [48, 70],
          [74, 80],
        ],
        drop: [
          [48, 70],
          [74, 80],
        ],
        object: [
          [48, 70],
          [74, 80],
        ],
        pairs: [
          [48, 70],
          [74, 80],
        ],
        invert: [
          [48, 70],
          [74, 80],
        ],
        omit: [
          [48, 70],
          [74, 80],
        ],
        random: [
          [48, 70],
          [74, 80],
        ],
        unescape: [
          [48, 70],
          [74, 80],
        ],
        findWhere: [
          [52, 70],
          [74, 80],
        ],
        partial: [
          [52, 70],
          [74, 80],
        ],
        unzip: [
          [53, 53],
          [58, 70],
          [74, 80],
        ],
        sample: [
          [55, 70],
          [74, 80],
        ],
        indexBy: [
          [55, 70],
          [74, 80],
        ],
        partition: [
          [56, 70],
          [74, 80],
        ],
        constant: [
          [56, 70],
          [74, 80],
        ],
        property: [
          [56, 70],
          [74, 80],
        ],
        matches: [
          [56, 70],
          [74, 80],
        ],
        now: [
          [56, 70],
          [74, 80],
        ],
        iteratee: [
          [57, 70],
          [74, 80],
        ],
        negate: [
          [57, 70],
          [74, 80],
        ],
        before: [
          [57, 70],
          [74, 80],
        ],
        noop: [
          [57, 70],
          [74, 80],
        ],
        includes: [
          [58, 70],
          [74, 80],
        ],
        findIndex: [
          [58, 70],
          [74, 80],
        ],
        findLastIndex: [
          [58, 70],
          [74, 80],
        ],
        allKeys: [
          [58, 70],
          [74, 80],
        ],
        mapObject: [
          [58, 70],
          [74, 80],
        ],
        extendOwn: [
          [58, 70],
          [74, 80],
        ],
        findKey: [
          [58, 70],
          [74, 80],
        ],
        isMatch: [
          [58, 70],
          [74, 80],
        ],
        isError: [
          [58, 70],
          [74, 80],
        ],
        propertyOf: [
          [58, 70],
          [74, 80],
        ],
        matcher: [
          [58, 70],
          [74, 80],
        ],
        assign: [
          [60, 70],
          [74, 80],
        ],
        create: [
          [61, 70],
          [74, 80],
        ],
        chunk: [
          [62, 70],
          [74, 80],
        ],
        restArguments: [
          [62, 70],
          [74, 80],
        ],
        isSymbol: [
          [62, 70],
          [74, 80],
        ],
        isMap: [
          [62, 70],
          [74, 80],
        ],
        isWeakMap: [
          [62, 70],
          [74, 80],
        ],
        isSet: [
          [62, 70],
          [74, 80],
        ],
        isWeakSet: [
          [62, 70],
          [74, 80],
        ],
        default: [
          [65, 70],
          [74, 80],
        ],
        _: [
          [67, 70],
          [74, 80],
        ],
        isArrayBuffer: [
          [68, 70],
          [74, 80],
        ],
        isDataView: [
          [68, 70],
          [74, 80],
        ],
        isTypedArray: [
          [68, 70],
          [74, 80],
        ],
        transpose: [
          [68, 70],
          [74, 80],
        ],
        toPath: [
          [69, 70],
          [74, 80],
        ],
        get: [
          [69, 70],
          [74, 80],
        ],
      },
      Underscore: {
        VERSION: [[1, 1]],
        PREVIOUS_UNDERSCORE: [[1, 1]],
        each: [[1, 1]],
        map: [[1, 1]],
        inject: [[1, 1]],
        detect: [[1, 1]],
        select: [[1, 1]],
        reject: [[1, 1]],
        all: [[1, 1]],
        any: [[1, 1]],
        include: [[1, 1]],
        invoke: [[1, 1]],
        pluck: [[1, 1]],
        max: [[1, 1]],
        min: [[1, 1]],
        sortBy: [[1, 1]],
        sortedIndex: [[1, 1]],
        toArray: [[1, 1]],
        size: [[1, 1]],
        first: [[1, 1]],
        last: [[1, 1]],
        compact: [[1, 1]],
        flatten: [[1, 1]],
        without: [[1, 1]],
        uniq: [[1, 1]],
        intersect: [[1, 1]],
        zip: [[1, 1]],
        indexOf: [[1, 1]],
        bind: [[1, 1]],
        bindAll: [[1, 1]],
        delay: [[1, 1]],
        defer: [[1, 1]],
        wrap: [[1, 1]],
        keys: [[1, 1]],
        values: [[1, 1]],
        extend: [[1, 1]],
        clone: [[1, 1]],
        isEqual: [[1, 1]],
        isElement: [[1, 1]],
        isArray: [[1, 1]],
        isFunction: [[1, 1]],
        isUndefined: [[1, 1]],
        noConflict: [[1, 1]],
        uniqueId: [[1, 1]],
        template: [[1, 1]],
      },
    },
  },
  'google-closure-library': {
    src: {
      '20220301.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220301.0.0/base.js',
      '20220405.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220405.0.0/base.js',
      '20220502.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220502.0.0/base.js',
      '20220601.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220601.0.0/base.js',
      '20220719.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220719.0.0/base.js',
      '20220803.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220803.0.0/base.js',
      '20220905.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20220905.0.0/base.js',
      '20221004.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20221004.0.0/base.js',
      '20221102.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20221102.0.0/base.js',
      '20230103.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230103.0.0/base.js',
      '20230206.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230206.0.0/base.js',
      '20230228.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230228.0.0/base.js',
      '20230411.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230411.0.0/base.js',
      '20230502.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230502.0.0/base.js',
      '20230802.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/google-closure-library/20230802.0.0/base.js',
    },
    tree: {
      goog: {
        global: [[0, 14]],
        exportPath_: [[0, 14]],
        define: [[0, 14]],
        FEATURESET_YEAR: [[0, 14]],
        DEBUG: [[0, 14]],
        LOCALE: [[0, 14]],
        getLocale: [[0, 9]],
        TRUSTED_SITE: [[0, 14]],
        DISALLOW_TEST_ONLY_CODE: [[0, 14]],
        ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING: [[0, 14]],
        provide: [[0, 14]],
        constructNamespace_: [[0, 14]],
        NONCE_PATTERN_: [[0, 14]],
        getScriptNonce_: [[0, 14]],
        VALID_MODULE_RE_: [[0, 14]],
        module: [[0, 14]],
        ModuleType: [[0, 14]],
        moduleLoaderState_: [[0, 14]],
        isInModuleLoader_: [[0, 14]],
        isInGoogModuleLoader_: [[0, 14]],
        isInEs6ModuleLoader_: [[0, 14]],
        declareModuleId: [[0, 14]],
        setTestOnly: [[0, 14]],
        forwardDeclare: [[0, 14]],
        isProvided_: [[0, 14]],
        implicitNamespaces_: [[0, 14]],
        getObjectByName: [[0, 14]],
        addDependency: [[0, 14]],
        ENABLE_DEBUG_LOADER: [[0, 14]],
        logToConsole_: [[0, 14]],
        require: [[0, 14]],
        requireType: [[0, 14]],
        basePath: [[0, 14]],
        nullFunction: [[0, 1]],
        abstractMethod: [[0, 14]],
        addSingletonGetter: [[0, 14]],
        instantiatedSingletons_: [[0, 14]],
        LOAD_MODULE_USING_EVAL: [[0, 14]],
        SEAL_MODULE_EXPORTS: [[0, 14]],
        loadedModules_: [[0, 14]],
        DEPENDENCIES_ENABLED: [[0, 14]],
        TRANSPILE: [[0, 14]],
        ASSUME_ES_MODULES_TRANSPILED: [[0, 14]],
        TRANSPILE_TO_LANGUAGE: [[0, 4]],
        TRANSPILER: [[0, 4]],
        TRUSTED_TYPES_POLICY_NAME: [[0, 14]],
        hasBadLetScoping: [[0, 14]],
        loadModule: [[0, 14]],
        loadModuleFromSource_: [[0, 14]],
        normalizePath_: [[0, 14]],
        loadFileSync_: [[0, 14]],
        transpile_: [[0, 4]],
        typeOf: [[0, 14]],
        isArrayLike: [[0, 14]],
        isDateLike: [[0, 14]],
        isObject: [[0, 14]],
        getUid: [[0, 14]],
        hasUid: [[0, 14]],
        removeUid: [[0, 14]],
        UID_PROPERTY_: [[0, 14]],
        uidCounter_: [[0, 14]],
        cloneObject: [[0, 14]],
        bindNative_: [[0, 14]],
        bindJs_: [[0, 14]],
        bind: [[0, 14]],
        partial: [[0, 14]],
        mixin: [[0, 0]],
        now: [[0, 14]],
        globalEval: [[0, 14]],
        getCssName: [[0, 14]],
        setCssNameMapping: [[0, 14]],
        getMsg: [[0, 14]],
        getMsgWithFallback: [[0, 14]],
        exportSymbol: [[0, 14]],
        exportProperty: [[0, 14]],
        inherits: [[0, 14]],
        scope: [[0, 14]],
        defineClass: [[0, 14]],
        identity_: [[0, 14]],
        createTrustedTypesPolicy: [[0, 14]],
        isEdge_: [[0, 10]],
        inHtmlDocument_: [[0, 10]],
        isDocumentLoading_: [[0, 10]],
        findBasePath_: [[0, 10]],
        Transpiler: [[0, 4]],
        transpiler_: [[0, 4]],
        protectScriptTag_: [[0, 10]],
        DebugLoader_: [[0, 10]],
        LoadController: [[0, 10]],
        Dependency: [[0, 10]],
        Es6ModuleDependency: [[0, 10]],
        TransformedDependency: [[0, 10]],
        TranspiledDependency: [[0, 4]],
        PreTranspiledEs6ModuleDependency: [[0, 10]],
        GoogModuleDependency: [[0, 10]],
        DependencyFactory: [[0, 10]],
        debugLoader_: [[0, 10]],
        loadClosureDeps: [[0, 10]],
        setDependencyFactory: [[0, 10]],
        TRUSTED_TYPES_POLICY_: [[0, 10]],
        bootstrap: [[0, 10]],
        CLOSURE_EVAL_PREFILTER_: [[0, 14]],
        GetMsgOptions: [[1, 14]],
      },
    },
  },
  'hammer.js': {
    src: {
      '0.6.4':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/0.6.4/hammer.js',
      '1.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.0/hammer.js',
      '1.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.1/hammer.js',
      '1.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.2/hammer.js',
      '1.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.3/hammer.js',
      '1.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.4/hammer.js',
      '1.0.5':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.5/hammer.js',
      '1.0.6':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.js',
      '1.0.7':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.7/hammer.js',
      '1.0.8':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.8/hammer.js',
      '1.0.9':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.9/hammer.js',
      '1.0.10':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.10/hammer.js',
      '1.0.11':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.11/hammer.js',
      '1.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.0/hammer.js',
      '1.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.1/hammer.js',
      '1.1.2':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.2/hammer.js',
      '1.1.3':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.3/hammer.js',
      '2.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.0/hammer.js',
      '2.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.1/hammer.js',
      '2.0.2':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.2/hammer.js',
      '2.0.3':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.3/hammer.js',
      '2.0.4':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.4/hammer.js',
      '2.0.5':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.5/hammer.js',
      '2.0.6':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.6/hammer.js',
      '2.0.7':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.7/hammer.js',
      '2.0.8':
        'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.js',
    },
    tree: {
      Hammer: {
        length: [[0, 25]],
        name: [[0, 25]],
        arguments: [[0, 0]],
        caller: [[0, 0]],
        prototype: [[0, 25]],
        defaults: [[1, 25]],
        HAS_POINTEREVENTS: [[1, 16]],
        HAS_TOUCHEVENTS: [[1, 16]],
        EVENT_TYPES: [[1, 12]],
        DIRECTION_DOWN: [[1, 25]],
        DIRECTION_LEFT: [[1, 25]],
        DIRECTION_UP: [[1, 25]],
        DIRECTION_RIGHT: [[1, 25]],
        POINTER_MOUSE: [[1, 16]],
        POINTER_TOUCH: [[1, 16]],
        EVENT_START: [[1, 16]],
        EVENT_MOVE: [[1, 16]],
        EVENT_END: [[1, 16]],
        plugins: [[1, 16]],
        READY: [[1, 16]],
        Instance: [[1, 16]],
        event: [[1, 16]],
        PointerEvent: [[1, 16]],
        utils: [[1, 16]],
        detection: [[1, 16]],
        gestures: [[1, 16]],
        STOP_MOUSEEVENTS: [[3, 3]],
        POINTER_PEN: [[4, 16]],
        DOCUMENT: [[4, 16]],
        MOBILE_REGEX: [[6, 12]],
        NO_MOUSEEVENTS: [
          [6, 12],
          [15, 16],
        ],
        UPDATE_VELOCITY_INTERVAL: [[8, 12]],
        VERSION: [[11, 25]],
        CALCULATE_INTERVAL: [[13, 16]],
        EVENT_RELEASE: [[13, 16]],
        EVENT_TOUCH: [[13, 16]],
        IS_MOBILE: [[15, 16]],
        INPUT_START: [[17, 25]],
        INPUT_MOVE: [[17, 25]],
        INPUT_END: [[17, 25]],
        INPUT_CANCEL: [[17, 25]],
        STATE_POSSIBLE: [[17, 25]],
        STATE_BEGAN: [[17, 25]],
        STATE_CHANGED: [[17, 25]],
        STATE_ENDED: [[17, 25]],
        STATE_RECOGNIZED: [[17, 25]],
        STATE_CANCELLED: [[17, 25]],
        STATE_FAILED: [[17, 25]],
        DIRECTION_NONE: [[17, 25]],
        DIRECTION_HORIZONTAL: [[17, 25]],
        DIRECTION_VERTICAL: [[17, 25]],
        DIRECTION_ALL: [[17, 25]],
        Manager: [[17, 25]],
        Input: [[17, 25]],
        TouchAction: [[17, 25]],
        Recognizer: [[17, 25]],
        AttrRecognizer: [[17, 25]],
        Tap: [[17, 25]],
        Pan: [[17, 25]],
        Swipe: [[17, 25]],
        Pinch: [[17, 25]],
        Rotate: [[17, 25]],
        Press: [[17, 25]],
        on: [[17, 25]],
        off: [[17, 25]],
        each: [[17, 25]],
        merge: [[17, 25]],
        extend: [[17, 25]],
        inherit: [[17, 25]],
        bindFn: [[17, 25]],
        prefixed: [[17, 25]],
        TouchInput: [[20, 25]],
        MouseInput: [[20, 25]],
        PointerEventInput: [[20, 25]],
        TouchMouseInput: [[20, 25]],
        SingleTouchInput: [[21, 25]],
        assign: [[23, 25]],
      },
    },
  },
  ionic: {
    src: {
      '0.9.08-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.08-alpha/js/ionic.js',
      '0.9.09-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.09-alpha/js/ionic.js',
      '0.9.10-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.10-alpha/js/ionic.js',
      '0.9.11-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.11-alpha/js/ionic.js',
      '0.9.12-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.12-alpha/js/ionic.js',
      '0.9.13-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.13-alpha/js/ionic.js',
      '0.9.14-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.14-alpha/js/ionic.min.js',
      '0.9.15-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.15-alpha/js/ionic.min.js',
      '0.9.16-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.16-alpha/js/ionic.min.js',
      '0.9.17-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.17-alpha/js/ionic.min.js',
      '0.9.18-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.18-alpha/js/ionic.min.js',
      '0.9.19-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.19-alpha/js/ionic.min.js',
      '0.9.20-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.20-alpha/js/ionic.min.js',
      '0.9.21-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.21-alpha/js/ionic.min.js',
      '0.9.22-alpha':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.22-alpha/js/ionic.min.js',
      '0.9.23':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.23/js/ionic.min.js',
      '0.9.24':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.24/js/ionic.min.js',
      '0.9.25':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.25/js/ionic.min.js',
      '0.9.26':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.26/js/ionic.min.js',
      '0.9.27':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/0.9.27/js/ionic.min.js',
      '1.0.0-beta.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.1/js/ionic.min.js',
      '1.0.0-beta.10':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.10/js/ionic.min.js',
      '1.0.0-beta.10-nightly-16570':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.10-nightly-16570/js/ionic.min.js',
      '1.0.0-beta.11':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.11/js/ionic.min.js',
      '1.0.0-beta.12':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.12/js/ionic.min.js',
      '1.0.0-beta.13':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.13/js/ionic.min.js',
      '1.0.0-beta.14':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.14/js/ionic.min.js',
      '1.0.0-beta.2':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.2/js/ionic.min.js',
      '1.0.0-beta.3':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.3/js/ionic.min.js',
      '1.0.0-beta.4':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.4/js/ionic.min.js',
      '1.0.0-beta.5':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.5/js/ionic.min.js',
      '1.0.0-beta.5b':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.5b/js/ionic.min.js',
      '1.0.0-beta.6':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.6/js/ionic.min.js',
      '1.0.0-beta.7':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.7/js/ionic.min.js',
      '1.0.0-beta.8':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.8/js/ionic.min.js',
      '1.0.0-beta.9':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-beta.9/js/ionic.min.js',
      '1.0.0-rc.0':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.0/js/ionic.min.js',
      '1.0.0-rc.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.1/js/ionic.min.js',
      '1.0.0-rc.2':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.2/js/ionic.min.js',
      '1.0.0-rc.3':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.3/js/ionic.min.js',
      '1.0.0-rc.4':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.4/js/ionic.min.js',
      '1.0.0-rc.5':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0-rc.5/js/ionic.min.js',
      '1.0.0':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.0/js/ionic.min.js',
      '1.0.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.0.1/js/ionic.min.js',
      '1.1.0':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.1.0/js/ionic.min.js',
      '1.1.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.1.1/js/ionic.min.js',
      '1.2.0':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.2.0/js/ionic.min.js',
      '1.2.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.2.1/js/ionic.min.js',
      '1.2.2':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.2.2/js/ionic.min.js',
      '1.2.3':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.2.3/js/ionic.min.js',
      '1.2.4':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.2.4/js/ionic.min.js',
      '1.3.0':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.3.0/js/ionic.min.js',
      '1.3.1':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.3.1/js/ionic.min.js',
      '1.3.2':
        'https://cdnjs.cloudflare.com/ajax/libs/ionic/1.3.2/js/ionic.min.js',
    },
    tree: {
      ionic: {
        controllers: [
          [0, 23],
          [27, 35],
        ],
        views: [[0, 53]],
        Animator: [
          [0, 21],
          [27, 35],
        ],
        DomUtil: [[0, 53]],
        EventController: [[0, 53]],
        on: [[0, 53]],
        off: [[0, 53]],
        trigger: [[0, 53]],
        onGesture: [[0, 53]],
        offGesture: [[0, 53]],
        Gesture: [[0, 53]],
        Gestures: [[0, 53]],
        Platform: [[0, 53]],
        CSS: [[0, 53]],
        Utils: [[0, 53]],
        inherit: [[0, 53]],
        extend: [[0, 53]],
        throttle: [[0, 53]],
        proxy: [[0, 53]],
        debounce: [[0, 53]],
        version: [[7, 53]],
        tapElement: [[14, 20]],
        requestAnimationFrame: [[17, 53]],
        animationFrameThrottle: [[17, 53]],
        activator: [[20, 53]],
        cancelAnimationFrame: [
          [21, 26],
          [30, 53],
        ],
        CustomEvent: [
          [21, 26],
          [29, 53],
        ],
        tap: [[21, 53]],
        keyboard: [[21, 53]],
        viewport: [
          [21, 26],
          [29, 53],
        ],
        scroll: [[21, 53]],
        Animation: [
          [21, 21],
          [29, 35],
        ],
        DelegateService: [
          [26, 26],
          [36, 53],
        ],
        EVENTS: [[48, 53]],
      },
      rAF: {
        length: [[0, 16]],
        name: [[0, 16]],
      },
      Scroller: {
        null: [[7, 19]],
      },
      core: {
        effect: [
          [7, 20],
          [27, 27],
        ],
      },
      IS_INPUT_LIKE_REGEX: {
        lastIndex: [[17, 19]],
      },
      _rAF: {
        length: [[17, 53]],
        name: [[17, 53]],
      },
      IS_EMBEDDED_OBJECT_REGEX: {
        lastIndex: [[19, 19]],
      },
      glMatrix: {
        setMatrixArrayType: [[29, 29]],
        toRadian: [[29, 29]],
      },
      vec2: {
        create: [[29, 29]],
        clone: [[29, 29]],
        fromValues: [[29, 29]],
        copy: [[29, 29]],
        set: [[29, 29]],
        add: [[29, 29]],
        subtract: [[29, 29]],
        sub: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        divide: [[29, 29]],
        div: [[29, 29]],
        min: [[29, 29]],
        max: [[29, 29]],
        scale: [[29, 29]],
        scaleAndAdd: [[29, 29]],
        distance: [[29, 29]],
        dist: [[29, 29]],
        squaredDistance: [[29, 29]],
        sqrDist: [[29, 29]],
        length: [[29, 29]],
        len: [[29, 29]],
        squaredLength: [[29, 29]],
        sqrLen: [[29, 29]],
        negate: [[29, 29]],
        normalize: [[29, 29]],
        dot: [[29, 29]],
        cross: [[29, 29]],
        lerp: [[29, 29]],
        random: [[29, 29]],
        transformMat2: [[29, 29]],
        transformMat2d: [[29, 29]],
        transformMat3: [[29, 29]],
        transformMat4: [[29, 29]],
        forEach: [[29, 29]],
        str: [[29, 29]],
      },
      vec3: {
        create: [[29, 29]],
        clone: [[29, 29]],
        fromValues: [[29, 29]],
        copy: [[29, 29]],
        set: [[29, 29]],
        add: [[29, 29]],
        subtract: [[29, 29]],
        sub: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        divide: [[29, 29]],
        div: [[29, 29]],
        min: [[29, 29]],
        max: [[29, 29]],
        scale: [[29, 29]],
        scaleAndAdd: [[29, 29]],
        distance: [[29, 29]],
        dist: [[29, 29]],
        squaredDistance: [[29, 29]],
        sqrDist: [[29, 29]],
        length: [[29, 29]],
        len: [[29, 29]],
        squaredLength: [[29, 29]],
        sqrLen: [[29, 29]],
        negate: [[29, 29]],
        normalize: [[29, 29]],
        dot: [[29, 29]],
        cross: [[29, 29]],
        lerp: [[29, 29]],
        random: [[29, 29]],
        transformMat4: [[29, 29]],
        transformMat3: [[29, 29]],
        transformQuat: [[29, 29]],
        rotateX: [[29, 29]],
        rotateY: [[29, 29]],
        rotateZ: [[29, 29]],
        forEach: [[29, 29]],
        str: [[29, 29]],
      },
      vec4: {
        create: [[29, 29]],
        clone: [[29, 29]],
        fromValues: [[29, 29]],
        copy: [[29, 29]],
        set: [[29, 29]],
        add: [[29, 29]],
        subtract: [[29, 29]],
        sub: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        divide: [[29, 29]],
        div: [[29, 29]],
        min: [[29, 29]],
        max: [[29, 29]],
        scale: [[29, 29]],
        scaleAndAdd: [[29, 29]],
        distance: [[29, 29]],
        dist: [[29, 29]],
        squaredDistance: [[29, 29]],
        sqrDist: [[29, 29]],
        length: [[29, 29]],
        len: [[29, 29]],
        squaredLength: [[29, 29]],
        sqrLen: [[29, 29]],
        negate: [[29, 29]],
        normalize: [[29, 29]],
        dot: [[29, 29]],
        lerp: [[29, 29]],
        random: [[29, 29]],
        transformMat4: [[29, 29]],
        transformQuat: [[29, 29]],
        forEach: [[29, 29]],
        str: [[29, 29]],
      },
      mat2: {
        create: [[29, 29]],
        clone: [[29, 29]],
        copy: [[29, 29]],
        identity: [[29, 29]],
        transpose: [[29, 29]],
        invert: [[29, 29]],
        adjoint: [[29, 29]],
        determinant: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        rotate: [[29, 29]],
        scale: [[29, 29]],
        str: [[29, 29]],
        frob: [[29, 29]],
        LDU: [[29, 29]],
      },
      mat2d: {
        create: [[29, 29]],
        clone: [[29, 29]],
        copy: [[29, 29]],
        identity: [[29, 29]],
        invert: [[29, 29]],
        determinant: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        rotate: [[29, 29]],
        scale: [[29, 29]],
        translate: [[29, 29]],
        str: [[29, 29]],
        frob: [[29, 29]],
      },
      mat3: {
        create: [[29, 29]],
        fromMat4: [[29, 29]],
        clone: [[29, 29]],
        copy: [[29, 29]],
        identity: [[29, 29]],
        transpose: [[29, 29]],
        invert: [[29, 29]],
        adjoint: [[29, 29]],
        determinant: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        translate: [[29, 29]],
        rotate: [[29, 29]],
        scale: [[29, 29]],
        fromMat2d: [[29, 29]],
        fromQuat: [[29, 29]],
        normalFromMat4: [[29, 29]],
        str: [[29, 29]],
        frob: [[29, 29]],
      },
      mat4: {
        create: [[29, 29]],
        clone: [[29, 29]],
        copy: [[29, 29]],
        identity: [[29, 29]],
        transpose: [[29, 29]],
        invert: [[29, 29]],
        adjoint: [[29, 29]],
        determinant: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        translate: [[29, 29]],
        scale: [[29, 29]],
        rotate: [[29, 29]],
        rotateX: [[29, 29]],
        rotateY: [[29, 29]],
        rotateZ: [[29, 29]],
        fromRotationTranslation: [[29, 29]],
        fromQuat: [[29, 29]],
        frustum: [[29, 29]],
        perspective: [[29, 29]],
        ortho: [[29, 29]],
        lookAt: [[29, 29]],
        str: [[29, 29]],
        frob: [[29, 29]],
      },
      quat: {
        create: [[29, 29]],
        rotationTo: [[29, 29]],
        setAxes: [[29, 29]],
        clone: [[29, 29]],
        fromValues: [[29, 29]],
        copy: [[29, 29]],
        set: [[29, 29]],
        identity: [[29, 29]],
        setAxisAngle: [[29, 29]],
        add: [[29, 29]],
        multiply: [[29, 29]],
        mul: [[29, 29]],
        scale: [[29, 29]],
        rotateX: [[29, 29]],
        rotateY: [[29, 29]],
        rotateZ: [[29, 29]],
        calculateW: [[29, 29]],
        dot: [[29, 29]],
        lerp: [[29, 29]],
        slerp: [[29, 29]],
        invert: [[29, 29]],
        conjugate: [[29, 29]],
        length: [[29, 29]],
        len: [[29, 29]],
        squaredLength: [[29, 29]],
        sqrLen: [[29, 29]],
        normalize: [[29, 29]],
        fromMat3: [[29, 29]],
        str: [[29, 29]],
      },
    },
  },
};

export default libData;
