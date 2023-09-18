var WaveSkin = WaveSkin || {};
WaveSkin.narrow = ['svg', {
    id: 'svg',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    height: '0'
},
    ['style', {
        type: 'text/css'
    }, 'text{font-size:11pt;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:center;fill-opacity:1;font-family:Cambria}.h1{font-size:33pt;font-weight:bold}.h2{font-size:27pt;font-weight:bold}.h3{font-size:20pt;font-weight:bold}.h4{font-size:14pt;font-weight:bold}.h5{font-size:11pt;font-weight:bold}.h6{font-size:8pt;font-weight:bold}.muted{fill:#aaa}.warning{fill:#f6b900}.error{fill:#f60000}.info{fill:#fff}.success{fill:#00ab00}text{fill:#fff}.s1{fill:none;stroke:#fff;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none}.s2{fill:none;stroke:#fff;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none}.s3{color:#fff;fill:none;stroke:#fff;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:1, 3;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible}.s4{color:#fff;fill:none;stroke:#fff;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible}.s5{fill:#191919;stroke:none}.s6{fill:#fff;fill-opacity:1;stroke:none}.s7{color:#fff;fill:#191919;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s8{color:#fff;fill:#ffffb4;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s9{color:#fff;fill:#f58025;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s10{color:#fff;fill:#0064b1;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s11{color:#fff;fill:#ccfdfe;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s12{color:#fff;fill:#cdfdc5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s13{color:#fff;fill:#f0c1fb;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}.s14{color:#fff;fill:#f5c2c0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1px;marker:none;visibility:visible;display:inline;overflow:visible}'],
    ['defs', ['g', {
        id: 'socket'
    },
        ['rect', {
            y: '15',
            x: '4',
            height: '20',
            width: '10'
        }]
    ],
        ['g', {
            id: 'pclk'
        },
            ['path', {
                d: 'M 0,20 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'nclk'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '000'
        },
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0m0'
        },
            ['path', {
                d: 'm 0,20 1,0 3,-10 3,10 3,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0m1'
        },
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mx'
        },
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 5,20',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 2,18',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0md'
        },
            ['path', {
                d: 'm 1,20 9,0',
                class: 's3'
            }],
            ['path', {
                d: 'm 0,20 1,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mu'
        },
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mz'
        },
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '111'
        },
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1m0'
        },
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1m1'
        },
            ['path', {
                d: 'M 0,0 1,0 4,10 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mx'
        },
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4.5,10.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 2,3 5,0',
                class: 's2'
            }]
        ],
        ['g', {
            id: '1md'
        },
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mu'
        },
            ['path', {
                d: 'M 0,0 1,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 1,0 9,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: '1mz'
        },
            ['path', {
                d: 'm 0,0 1,0 c 2,4 6,10 9,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xxx'
        },
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 10,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 10,5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 10,10',
                class: 's2'
            }],
            ['path', {
                d: 'm 5,20 5,-5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xm0'
        },
            ['path', {
                d: 'M 0,0 1,0 7,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 5,15',
                class: 's2'
            }],
            ['path', {
                d: 'M 5,20 6,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xm1'
        },
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 6,4',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmx'
        },
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 10,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 10,5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 10,10',
                class: 's2'
            }],
            ['path', {
                d: 'm 5,20 5,-5',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmd'
        },
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 1.5,3.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 2.5,7.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3.5,11.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 5,15',
                class: 's2'
            }],
            ['path', {
                d: 'M 5,20 7,18',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmu'
        },
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 5,0',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 5,5',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 2,13',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'xmz'
        },
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 4,6',
                class: 's2'
            }],
            ['path', {
                d: 'm 0,15.5 6,-7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'ddd'
        },
            ['path', {
                d: 'm 0,20 10,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'dm0'
        },
            ['path', {
                d: 'm 0,20 7,0',
                class: 's3'
            }],
            ['path', {
                d: 'm 7,20 3,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dm1'
        },
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmx'
        },
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 5,20',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 1.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmd'
        },
            ['path', {
                d: 'm 0,20 10,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'dmu'
        },
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'dmz'
        },
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'uuu'
        },
            ['path', {
                d: 'M 0,0 10,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'um0'
        },
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'um1'
        },
            ['path', {
                d: 'M 0,0 7,0',
                class: 's3'
            }],
            ['path', {
                d: 'm 7,0 3,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umx'
        },
            ['path', {
                d: 'M 1.4771574,0 7,20 l 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4.5,10.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 3.5,6.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 2.463621,2.536379 5,0',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'umd'
        },
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umu'
        },
            ['path', {
                d: 'M 0,0 10,0',
                class: 's3'
            }]
        ],
        ['g', {
            id: 'umz'
        },
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's4'
            }]
        ],
        ['g', {
            id: 'zzz'
        },
            ['path', {
                d: 'm 0,10 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zm0'
        },
            ['path', {
                d: 'm 0,10 1,0 4,10 5,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zm1'
        },
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmx'
        },
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 5,20',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 4,16',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 2.5,12.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 2,8',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'zmd'
        },
            ['path', {
                d: 'm 0,10 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmu'
        },
            ['path', {
                d: 'm 0,10 1,0 C 3,4 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmz'
        },
            ['path', {
                d: 'm 0,10 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'gap'
        },
            ['path', {
                d: 'm 7,-2 -4,0 c -5,0 -5,24 -10,24 l 4,0 C 2,22 2,-2 7,-2 z',
                class: 's5'
            }],
            ['path', {
                d: 'M -7,22 C -2,22 -2,-2 3,-2',
                class: 's1'
            }],
            ['path', {
                d: 'M -3,22 C 2,22 2,-2 7,-2',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'Pclk'
        },
            ['path', {
                d: 'M -3,12 0,3 3,12 C 1,11 -1,11 -3,12 z',
                class: 's6'
            }],
            ['path', {
                d: 'M 0,20 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'Nclk'
        },
            ['path', {
                d: 'M -3,8 0,17 3,8 C 1,9 -1,9 -3,8 z',
                class: 's6'
            }],
            ['path', {
                d: 'm 0,0 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-2'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-2'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-2'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-2'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-2'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-2'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-2'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-2'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's7'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-2'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-2'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-2'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-2'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-3'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-3'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-3'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-3'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-3'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-3'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-3'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-3'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's8'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-3'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-3'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-3'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-3'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-4'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-4'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-4'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-4'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-4'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-4'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-4'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-4'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's9'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-4'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-4'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-4'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-4'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-5'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-5'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-5'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-5'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-5'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-5'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-5'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-5'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's10'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-5'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-5'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-5'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-5'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-6'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-6'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-6'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-6'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-6'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-6'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-6'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-6'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's11'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-6'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-6'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-6'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-6'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-7'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-7'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-7'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-7'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-7'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-7'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-7'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-7'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's12'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-7'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-7'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-7'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-7'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-8'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-8'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-8'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-8'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-8'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-8'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-8'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-8'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's13'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-8'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-8'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-8'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-8'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: '0mv-9'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: '1mv-9'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'xmv-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,5 2,3',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,10 3,7',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,15 3,12',
                class: 's2'
            }],
            ['path', {
                d: 'M 0,20 1,19',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'dmv-9'
        },
            ['path', {
                d: 'm 7,0 3,0 0,20 -9,0 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'umv-9'
        },
            ['path', {
                d: 'm 1,0 9,0 0,20 -3,0 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'zmv-9'
        },
            ['path', {
                d: 'M 5,0 10,0 10,20 5,20 1,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 1,10 4,10 5,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,10 1,10 5,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vvv-9'
        },
            ['path', {
                d: 'M 10,20 0,20 0,0 10,0',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm0-9'
        },
            ['path', {
                d: 'm 0,20 0,-20 1.000687,-0.00391 6,20',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1.000687,-0.00391 6,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10.000687,-0.0039',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vm1-9'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 7,0',
                class: 's14'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmx-9'
        },
            ['path', {
                d: 'M 0,0 0,20 1,20 4,10 1,0',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 10,15 6.5,18.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,10 5.5,14.5',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,5 4,11',
                class: 's2'
            }],
            ['path', {
                d: 'M 10,0 6,4',
                class: 's2'
            }]
        ],
        ['g', {
            id: 'vmd-9'
        },
            ['path', {
                d: 'm 0,0 0,20 10,0 C 5,20 2,7 1,0',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 1,7 4,20 9,20',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmu-9'
        },
            ['path', {
                d: 'm 0,0 0,20 1,0 C 2,13 5,0 10,0',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 2,13 5,0 10,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmz-9'
        },
            ['path', {
                d: 'M 0,0 1,0 C 3,6 7,10 10,10 7,10 3,14 1,20 L 0,20',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 c 2,6 6,10 9,10',
                class: 's1'
            }],
            ['path', {
                d: 'm 0,20 1,0 C 3,14 7,10 10,10',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-2'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-3'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-4'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-5'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-6'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-7'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-8'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-2-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's7'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-3-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's8'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-4-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's9'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-5-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's10'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-6-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's11'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-7-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's12'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-8-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's13'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['g', {
            id: 'vmv-9-9'
        },
            ['path', {
                d: 'M 7,0 10,0 10,20 7,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'M 1,0 0,0 0,20 1,20 4,10 z',
                class: 's14'
            }],
            ['path', {
                d: 'm 0,0 1,0 6,20 3,0',
                class: 's1'
            }],
            ['path', {
                d: 'M 0,20 1,20 7,0 10,0',
                class: 's1'
            }]
        ],
        ['marker', {
            id: 'arrowhead',
            style: 'fill:#fff',
            markerHeight: 7,
            markerWidth: 10,
            markerUnits: 'strokeWidth',
            viewBox: '0 -4 11 8',
            refX: 15,
            refY: 0,
            orient: 'auto'
        },
            ['path', {
                d: 'M0 -4 11 0 0 4z'
            }]
        ],
        ['marker', {
            id: 'arrowtail',
            style: 'fill:#fff',
            markerHeight: 7,
            markerWidth: 10,
            markerUnits: 'strokeWidth',
            viewBox: '-11 -4 11 8',
            refX: -15,
            refY: 0,
            orient: 'auto'
        },
            ['path', {
                d: 'M0 -4 -11 0 0 4z'
            }]
        ],
        ['marker', {
            id: 'tee',
            style: 'fill:#fff',
            markerHeight: 6,
            markerWidth: 1,
            markerUnits: 'strokeWidth',
            viewBox: '0 0 1 6',
            refX: 0,
            refY: 3,
            orient: 'auto'
        },
            ['path', {
                d: 'M 0 0 L 0 6',
                style: 'stroke:#fff;stroke-width:2'
            }]
        ]
    ],
    ['g', {
        id: 'waves'
    },
        ['g', {
            id: 'lanes'
        }],
        ['g', {
            id: 'groups'
        }]
    ]
];
try {
    module.exports = WaveSkin;
} catch (err) { }