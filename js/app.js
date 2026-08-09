/* =====================================================
   DERSCEP - APP.JS
   Genel site sistemi
===================================================== */

"use strict";

/* =====================================================
   DERSCEP APP
===================================================== */

const DersCep = {

  /* ---------------------------------------------------
     STORAGE
  --------------------------------------------------- */

  storage: {

    get(key, fallback = null) {

      try {

        const value =
          localStorage.getItem(key);

        if (value === null) {
          return fallback;
        }

        return JSON.parse(value);

      } catch (error) {

        console.warn(
          "DersCep Storage okunamadı:",
          error
        );

        return fallback;

      }

    },


    set(key, value) {

      try {

        localStorage.setItem(
          key,
          JSON.stringify(value)
        );

      } catch (error) {

        console.warn(
          "DersCep Storage yazılamadı:",
          error
        );

      }

    },


    remove(key) {

      try {

        localStorage.removeItem(key);

      } catch (error) {

        console.warn(
          "DersCep Storage silinemedi:",
          error
        );

      }

    }

  },


  /* ---------------------------------------------------
     TEMA
  --------------------------------------------------- */

  theme: {

    init() {

      const savedTheme =
        DersCep.storage.get(
          "derscep-theme",
          "light"
        );

      if (savedTheme === "dark") {

        document.body.classList.add("dark");

      }

      this.updateButton();

    },


    toggle() {

      const isDark =
        document.body.classList.toggle("dark");

      DersCep.storage.set(
        "derscep-theme",
        isDark ? "dark" : "light"
      );

      this.updateButton();

    },


    updateButton() {

      const buttons =
        document.querySelectorAll(
          "[data-theme-toggle]"
        );

      const isDark =
        document.body.classList.contains("dark");

      buttons.forEach(button => {

        button.textContent =
          isDark ? "☀️" : "🌙";

        button.setAttribute(
          "aria-label",
          isDark
            ? "Aydınlık moda geç"
            : "Karanlık moda geç"
        );

      });

    }

  },


  /* ---------------------------------------------------
     FAVORİLER
  --------------------------------------------------- */

  favorites: {

    key: "derscep-favorites",


    get() {

      return DersCep.storage.get(
        this.key,
        []
      );

    },


    has(noteId) {

      return this.get().includes(
        String(noteId)
      );

    },


    add(noteId) {

      const favorites =
        this.get();

      noteId =
        String(noteId);

      if (!favorites.includes(noteId)) {

        favorites.push(noteId);

        DersCep.storage.set(
          this.key,
          favorites
        );

      }

      this.updateButtons();

    },


    remove(noteId) {

      let favorites =
        this.get();

      noteId =
        String(noteId);

      favorites =
        favorites.filter(
          id => id !== noteId
        );

      DersCep.storage.set(
        this.key,
        favorites
      );

      this.updateButtons();

    },


    toggle(noteId) {

      if (this.has(noteId)) {

        this.remove(noteId);

      } else {

        this.add(noteId);

      }

    },


    updateButtons() {

      document
        .querySelectorAll(
          "[data-favorite]"
        )
        .forEach(button => {

          const id =
            button.dataset.favorite;

          const active =
            this.has(id);

          button.textContent =
            active ? "♥" : "♡";

          button.setAttribute(
            "aria-label",
            active
              ? "Favorilerden çıkar"
              : "Favorilere ekle"
          );

          button.classList.toggle(
            "active",
            active
          );

        });

    }

  },


  /* ---------------------------------------------------
     SON GÖRÜNTÜLENENLER
  --------------------------------------------------- */

  history: {

    key: "derscep-history",

    limit: 10,


    get() {

      return DersCep.storage.get(
        this.key,
        []
      );

    },


    add(noteId) {

      noteId =
        String(noteId);

      let history =
        this.get();

      history =
        history.filter(
          id => id !== noteId
        );

      history.unshift(noteId);

      history =
        history.slice(
          0,
          this.limit
        );

      DersCep.storage.set(
        this.key,
        history
      );

    }

  },


  /* ---------------------------------------------------
     ARAMA
  --------------------------------------------------- */

  search: {

    normalize(text) {

      return String(text || "")
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(
          /[\u0300-\u036f]/g,
          ""
        );

    },


    filterNotes(notes, query) {

      const search =
        this.normalize(query);

      if (!search) {
        return notes;
      }

      return notes.filter(note => {

        const title =
          this.normalize(note.title);

        const subject =
          this.normalize(note.subject);

        const description =
          this.normalize(note.description);

        const grade =
          this.normalize(note.grade);

        const topics =
          this.normalize(
            Array.isArray(note.topics)
              ? note.topics.join(" ")
              : ""
          );

        const content =
          [
            title,
            subject,
            description,
            grade,
            topics
          ].join(" ");

        return content.includes(search);

      });

    }

  },


  /* ---------------------------------------------------
     URL YARDIMCILARI
  --------------------------------------------------- */

  url: {

    getParams() {

      return new URLSearchParams(
        window.location.search
      );

    },


    get(name) {

      return this.getParams().get(name);

    },


    go(url) {

      window.location.href = url;

    }

  },


  /* ---------------------------------------------------
     MOBİL MENÜ
  --------------------------------------------------- */

  mobileMenu: {

    init() {

      const button =
        document.querySelector(
          "[data-mobile-menu]"
        );

      const menu =
        document.querySelector(
          "[data-mobile-nav]"
        );

      if (!button || !menu) {
        return;
      }

      button.addEventListener(
        "click",
        () => {

          menu.classList.toggle(
            "open"
          );

          const open =
            menu.classList.contains(
              "open"
            );

          button.setAttribute(
            "aria-expanded",
            String(open)
          );

        }
      );


      menu
        .querySelectorAll("a")
        .forEach(link => {

          link.addEventListener(
            "click",
            () => {

              menu.classList.remove(
                "open"
              );

            }
          );

        });

    }

  },


  /* ---------------------------------------------------
     FAVORİ BUTONLARI
  --------------------------------------------------- */

  favoriteButtons: {

    init() {

      document
        .querySelectorAll(
          "[data-favorite]"
        )
        .forEach(button => {

          button.addEventListener(
            "click",
            event => {

              event.preventDefault();

              event.stopPropagation();

              const id =
                button.dataset.favorite;

              if (!id) {
                return;
              }

              DersCep.favorites.toggle(
                id
              );

            }
          );

        });


      DersCep.favorites.updateButtons();

    }

  },


  /* ---------------------------------------------------
     SAYFA BAŞLANGICI
  --------------------------------------------------- */

  init() {

    this.theme.init();

    this.mobileMenu.init();

    this.favoriteButtons.init();

    /* Tema butonları */

    document
      .querySelectorAll(
        "[data-theme-toggle]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            this.theme.toggle();

          }
        );

      });


    /* Sayfa içi bağlantılar */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          event => {

            const targetId =
              link.getAttribute(
                "href"
              );

            if (
              !targetId ||
              targetId === "#"
            ) {
              return;
            }

            const target =
              document.querySelector(
                targetId
              );

            if (!target) {
              return;
            }

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        );

      });


    console.log(
      "DersCep başarıyla başlatıldı 🚀"
    );

  }

};


/* =====================================================
   SAYFA YÜKLENDİ
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    DersCep.init();

  }
);


/* =====================================================
   GLOBAL ERİŞİM
===================================================== */

window.DersCep = DersCep;
