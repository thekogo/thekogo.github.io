import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";


const messages = {
  en: {
    greeting: "Hello {name}! How are you?",
    time: "The time is {t, time, short}.",
    date: "The date is {d, date}."
  },
  es: {
    greeting: "¡Hola {name}! ¿Cómo estás?",
    time: "La hora es {t, time, short}.",
    date: "La fecha es {d, date}."
  },
  fr: {
    greeting: "Bonjour {name}! Comment ça va?",
    time: "Il est {t, time, short}.",
    date: "La date est {d, date}."
  },
  de: {
    greeting: "Hallo {name}! Wie geht's?",
    time: "Es ist {t, time, short} Uhr.",
    date: "Das Datum ist {d, date}."
  },
  th: {
    greeting: "สวัสดี {name}! สบายดีไหม?",
    time: "เวลาตอนนี้คือ {t, time, short} นาฬิกา",
    date: "วันนี้วันที่ {d, date}."
  }
};

function App() {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const [locale, setLocale] = useState("en");

  const handleSelect = e => {
    setLocale(e.target.value);
  };

  return (
    <>
      <input placeholder="Enter name" onChange={handleChange} />
      <select onChange={handleSelect} defaultValue={locale}>
        {["en", "es", "fr", "de", "th"].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="greeting" values={{ name }} />
          <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
          <br />
          <FormattedMessage id="date" values={{ d: Date.now() }} />
        </p>
      </IntlProvider>
    </>
  );
}

export default App;
