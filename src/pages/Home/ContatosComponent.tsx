import React from "react";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export default function ContatosSection({ ...props }) {
  return (
    <>
      <h1 id="contatos" ref={props.reference}>
        Contatos
      </h1>
      <ul>
        <li>Email: Danielcarvallhorst@gmail.com</li>
        <li>WhatsApp: +55 (98) 98713-2829</li>
      </ul>
    </>
  );
}
