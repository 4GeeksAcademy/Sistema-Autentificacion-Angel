import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/private.css";


export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div class="container2 container mt-5 d-flex align-items-center justify-content-center">
    <form class="form2">
      <div class="descr">Información</div>
      <div class="input2">
          <input required="" autocomplete="off" type="text"/>
          <label for="name">Name</label>
      </div>

      <div class="input2">
          <input required="" autocomplete="off" name="email" type="text"/>
          <label for="email">E-mail</label>
      </div>

      <div class="input2">
          <textarea required="" cols="30" rows="1" id="message"></textarea>
          <label for="message">Message</label>
      </div>
    </form>
</div>

  );
};