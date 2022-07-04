import React from "react";

interface Prosjekt {
  tittel: string;
  beskrivelse: string;
  bildeUrl: string;
}

const prosjekter: Prosjekt[] = [
  {
    tittel: "Vippsnummer for Vipps",
    beskrivelse:
      "Vipps handler om å gjøre hverdagen for folk enkel. Som for eksempel når det kommer til å betale eller å identifisere seg.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/4J5kAlF9Pe4ekExcD30HSy/1231fca0e7b923d9d95ec342a61bae2f/vippskids.png",
  },
  {
    tittel: "Brand wall for Microsoft",
    beskrivelse:
      "I nærmere 50 byer verden rundt har Microsoft opprettet sentre for vise fram ny bruk av teknologi. I Oslo fikk de hjelp av Bekk.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/4aGvlpXFBX5xusteoqSibp/5fdd7422edf9af31e2337013fa01719f/speil-speil.png",
  },
  {
    tittel: "Bilabonnement for SpareBank 1",
    beskrivelse: "Bank som går nye veier.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/1YOmjxZRbUkPqcHPa8Sm81/729abd99ad5b7c9ec2177c9d191def9e/bilabonnement-vertikal.png",
  },
  {
    tittel: "En tverrfaglig reise med Pushwagnersizer",
    beskrivelse:
      "I samarbeid med Grafill, fikk Bekk være med å konseptualisere temaet for årets ED Awards, «Making new connections». Målet var å skape en unik opplevelse for de besøkende ved å forene design og teknologi.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/1D9T8Mvk6oaaMG0gyeoKiG/0ba7c6104a3c3c89ccf6dd04b6a21180/pushfront2.jpg",
  },
  {
    tittel: "NRK Super-appen for NRK",
    beskrivelse:
      "Sammen med NRK har vi utviklet barnas kuleste app. Populær er den også, med hele 2,6 millioner besøk hver uke.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/5rIowmUNk4OeKwCokqeCiU/bcce148ea7bb4ff818dbafa18e05d34d/bekk_2017_nrksuper02_hvavigjor.jpg",
  },
  {
    tittel: "En tverrfaglig reise med Pushwagnersizer",
    beskrivelse:
      "Tiden løper ubekymret i fra oss alle, inkludert digitale løsninger og tjenester. Så, etter å ha prestert i nesten 7 år på samme tekniske plattform, var Operaen.no moden for en revitalisering.",
    bildeUrl:
      "https://images.ctfassets.net/1qpxx0gkt9lo/aXW6xWa638UDRVpduduZK/cdd9ed4a8d494dafd83c8c7f72725739/operaen-sta__ende.png",
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Code in the Dark</h1>
        {/* Din kode her */}
      </div>
    </div>
  );
};

export default App;
