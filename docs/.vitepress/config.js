import { defineConfig } from 'vitepress'
import { en } from './config/en'
import { zh } from './config/zh'
import { ar } from './config/ar'
import { de } from './config/de'
import { es } from './config/es'
import { fr } from './config/fr'
import { hi } from './config/hi'
import { id } from './config/id'
import { it } from './config/it'
import { ja } from './config/ja'
import { ko } from './config/ko'
import { ru } from './config/ru'
import { vi } from './config/vi'
import { zhHK } from './config/zh-HK'

export default defineConfig({
  title: 'UTOPIA',
  description: 'A decentralized value flow network',
  
  // 多语言配置
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      ...en
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      ...zh
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      link: '/ar/',
      ...ar
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      ...de
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      ...es
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      ...fr
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      link: '/hi/',
      ...hi
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      link: '/id/',
      ...id
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      link: '/it/',
      ...it
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      ...ja
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      ...ko
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      ...ru
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/',
      ...vi
    },
    'zh-HK': {
      label: '繁體中文',
      lang: 'zh-HK',
      link: '/zh-HK/',
      ...zhHK
    }
  },

  // 强制暗色模式
  appearance: 'dark',
  
  // 主题配置
  themeConfig: {
    logo: '/images/utopia-logo.png',
    siteTitle: 'UTOPIA',
    
    // 社交链接
    socialLinks: [],

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          ar: {
            translations: {
              button: {
                buttonText: 'بحث',
                buttonAriaLabel: 'بحث'
              },
              modal: {
                noResultsText: 'لم يتم العثور على نتائج',
                resetButtonTitle: 'مسح البحث',
                footer: {
                  selectText: 'اختيار',
                  navigateText: 'تنقل'
                }
              }
            }
          },
          de: {
            translations: {
              button: {
                buttonText: 'Suchen',
                buttonAriaLabel: 'Suchen'
              },
              modal: {
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Suche löschen',
                footer: {
                  selectText: 'Auswählen',
                  navigateText: 'Navigieren'
                }
              }
            }
          },
          es: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'No se encontraron resultados',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: {
                  selectText: 'Seleccionar',
                  navigateText: 'Navegar'
                }
              }
            }
          },
          fr: {
            translations: {
              button: {
                buttonText: 'Rechercher',
                buttonAriaLabel: 'Rechercher'
              },
              modal: {
                noResultsText: 'Aucun résultat trouvé',
                resetButtonTitle: 'Effacer la recherche',
                footer: {
                  selectText: 'Sélectionner',
                  navigateText: 'Naviguer'
                }
              }
            }
          },
          hi: {
            translations: {
              button: {
                buttonText: 'खोजें',
                buttonAriaLabel: 'खोजें'
              },
              modal: {
                noResultsText: 'कोई परिणाम नहीं मिला',
                resetButtonTitle: 'खोज साफ़ करें',
                footer: {
                  selectText: 'चुनें',
                  navigateText: 'नेविगेट करें'
                }
              }
            }
          },
          id: {
            translations: {
              button: {
                buttonText: 'Cari',
                buttonAriaLabel: 'Cari'
              },
              modal: {
                noResultsText: 'Tidak ada hasil ditemukan',
                resetButtonTitle: 'Hapus pencarian',
                footer: {
                  selectText: 'Pilih',
                  navigateText: 'Navigasi'
                }
              }
            }
          },
          it: {
            translations: {
              button: {
                buttonText: 'Cerca',
                buttonAriaLabel: 'Cerca'
              },
              modal: {
                noResultsText: 'Nessun risultato trovato',
                resetButtonTitle: 'Cancella ricerca',
                footer: {
                  selectText: 'Seleziona',
                  navigateText: 'Naviga'
                }
              }
            }
          },
          ja: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '結果が見つかりません',
                resetButtonTitle: '検索をクリア',
                footer: {
                  selectText: '選択',
                  navigateText: 'ナビゲート'
                }
              }
            }
          },
          ko: {
            translations: {
              button: {
                buttonText: '검색',
                buttonAriaLabel: '검색'
              },
              modal: {
                noResultsText: '결과를 찾을 수 없습니다',
                resetButtonTitle: '검색 지우기',
                footer: {
                  selectText: '선택',
                  navigateText: '탐색'
                }
              }
            }
          },
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Результаты не найдены',
                resetButtonTitle: 'Очистить поиск',
                footer: {
                  selectText: 'Выбрать',
                  navigateText: 'Навигация'
                }
              }
            }
          },
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'Chọn',
                  navigateText: 'Điều hướng'
                }
              }
            }
          },
          'zh-HK': {
            translations: {
              button: {
                buttonText: '搜尋文檔',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換'
                }
              }
            }
          }
        }
      }
    }
  },
  
  // 构建配置
  base: '/utopia-whitepaper/',
  
  // Vite 配置
  vite: {
    ssr: {
      noExternal: ['element-plus', '@element-plus/icons-vue']
    }
  },

  // 头部标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=K2D:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#E5A000' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'UTOPIA Whitepaper' }],
    ['meta', { name: 'og:image', content: '/images/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/images/og-image.png' }]
  ],

  // 最后更新时间
  lastUpdated: false
})