#\!/bin/bash

# Arabic
sed -i "s < /dev/null | nav: \[|nav: [\n      { text: 'الصحوة الفكرية', link: '/ar/awakening/' },|" ar.js

# German  
sed -i "s|nav: \[|nav: [\n      { text: 'Erwachen', link: '/de/awakening/' },|" de.js

# Spanish
sed -i "s|nav: \[|nav: [\n      { text: 'Despertar', link: '/es/awakening/' },|" es.js

# French
sed -i "s|nav: \[|nav: [\n      { text: 'Éveil', link: '/fr/awakening/' },|" fr.js

# Hindi
sed -i "s|nav: \[|nav: [\n      { text: 'विचार जागृति', link: '/hi/awakening/' },|" hi.js

# Indonesian
sed -i "s|nav: \[|nav: [\n      { text: 'Kebangkitan', link: '/id/awakening/' },|" id.js

# Italian
sed -i "s|nav: \[|nav: [\n      { text: 'Risveglio', link: '/it/awakening/' },|" it.js

# Japanese
sed -i "s|nav: \[|nav: [\n      { text: '思想覚醒', link: '/ja/awakening/' },|" ja.js

# Korean
sed -i "s|nav: \[|nav: [\n      { text: '사상각성', link: '/ko/awakening/' },|" ko.js

# Russian
sed -i "s|nav: \[|nav: [\n      { text: 'Пробуждение', link: '/ru/awakening/' },|" ru.js

# Vietnamese
sed -i "s|nav: \[|nav: [\n      { text: 'Thức Tỉnh', link: '/vi/awakening/' },|" vi.js

# Traditional Chinese (Hong Kong)
sed -i "s|nav: \[|nav: [\n      { text: '思想覺醒', link: '/zh-HK/awakening/' },|" zh-HK.js

