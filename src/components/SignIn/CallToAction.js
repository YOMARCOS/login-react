import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class CallToAction extends PureComponent {
  render() {
    return (
      <section className="block block-gradient">
        <div className="wrapper">
          <h2 className="title">Ainda não estou no QUERO TRAMPO</h2>
          <p>Gostou da vaga? Agora você precisa criar sua conta QUERO TRAMPO para poder se candidatar.</p>
          <Link to="/cadastrar">
            <button className="btn-default btn-dark">Criar conta</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default CallToAction;
