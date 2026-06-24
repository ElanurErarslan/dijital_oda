// Her nesne için: Spline'daki katman ismi (id) ile eşleşmeli.
// title: modal başlığı, icon: modalda görünen küçük ikon/emoji
// body: JSX içerik - liste, paragraf, link, ne istersen koyabilirsin.

export const roomObjects = {
  book: {
    title: "Okuduğum Kitaplar",
    icon: "📚",
    body: (
      <ul>
        <li><strong>Sırça Köşk</strong> — Sabahattin Ali</li>
        <li><strong>Gurur ve Önyargı</strong> — Jane Austen</li>
        <li><strong>Yabancı</strong> — Albert Camus</li>
        <li><strong>Martin Eden</strong> — Jack London</li>
        <li><strong>Jane Eyre</strong> — Charlotte Brontë</li>
      </ul>
    ),
  },

  music: {
    title: "Favori Müziklerim",
    icon: "🎵",
    body: (
      <ul>
        <li><strong>Past Life</strong> — Ariana Grande</li>
        <li><strong>Hileli</strong> — Manifest</li>
        <li><strong>Be the One</strong> — Dua Lipa</li>
        <li><strong>Yokluğunda</strong> — Leyla The Band</li>
        <li><strong>Armağan</strong> — Hande Yener</li>
        <li><strong>La Fama</strong> — Rosalía</li>
        <li><strong>Yüzsüz Yürek</strong> — Kenan Doğulu</li>
        <li><strong>Nazar Değmesin</strong> — Gülşen</li>
        <li><strong>Biri Var</strong> — Hande Yener</li>
        <li><strong>Uçurum</strong> — Murat Boz</li>
      </ul>
    ),
  },

  computer: {
    title: "Yaptığım Projeler",
    icon: "💻",
    body: (
      <ul>
        <li><strong>Görsel Programlama</strong> — Film / müzik öneri uygulaması</li>
        <li><strong>İnternet Programlama</strong> — Dijital Oda web sitesi</li>
      </ul>
    ),
  },

  mug: {
    title: "Kahve Sevgim",
    icon: "☕",
    body: (
      <p>
        Sabahları kahve içmeden olmaz diyen insanlardan değilim, ama
        kahveyi çok severim — özellikle yazın.
      </p>
    ),
  },

  girl: {
    title: "Hakkımda",
    icon: "🧑",
    body: (
      <>
        <img
          src="/elanur.jpg"
          alt="Elanur"
          style={{
            width: "140px",
            display: "block",
            margin: "0 auto 18px",
            borderRadius: "10px",
          }}
        />
        <p>
          Merhaba hoşgeldiniz, ben Elanur. Balıkesir Üniversitesi'nde
          Bilgisayar Mühendisliği okuyorum, 2. sınıfım. C#, Python ve
          Java dillerini biliyorum. İngilizce seviyem B1-B2 arası.
          Yazılım alanına ilgim var.
        </p>
      </>
    ),
  },

  Ball: {
    title: "Spor",
    icon: "🏐",
    body: (
      <p>
        Voleybol oynamayı çok severim.
      </p>
    ),
  },
};
