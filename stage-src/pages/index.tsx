/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import React from 'react';
import Link from "next/link";
import { css } from '@emotion/react';
import { createPage } from "../global/utils/pages";
import PageLayout from '@/components/PageLayout';

const HomePage = createPage({
  getInitialProps: async ({ query, egoJwt }) => {
    return { query, egoJwt };
  },
  isPublic: true,
})(() => {
  return (
    <PageLayout subtitle="Portal SEED-ALS">
      <div css={containerStyles}>
        <div css={contentStyles}>
          {/* Logo */}
          <div css={logoContainerStyles}>
            <img
              src="/logos/Ciber+SEED-ALS PNG/logo Ciber + SEED-ALS_Azul.png"
              alt="CIBEL + SEED-ALS Logo"
              css={logoStyles}
            />
          </div>

          {/* Main Title */}
          <h1 css={titleStyles}>
            Plataforma de Datos Genómicos
          </h1>

          {/* Subtitle */}
          <h2 css={subtitleStyles}>
            Análisis integrativo de datos multiómicos para investigación en ELA
          </h2>

          {/* Description */}
          <div css={descriptionContainerStyles}>
            <p css={descriptionStyles}>
              SEED-ALS (<em>Synergizing Efforts to Develop and Accelerate Breakthroughs in ALS Research</em>)
              es un proyecto nacional colaborativo que involucra <strong>27 grupos de investigación</strong> en
              <strong>13 comunidades autónomas</strong>, integrando todas las unidades de referencia nacionales
              y europeas de ELA.
            </p>
            <p css={descriptionStyles}>
              Este portal proporciona acceso a estudios genómicos de ELA del <em>European Genome-phenome Archive</em> (EGA)
              y facilitará la visualización de resultados de análisis multiómicos, incluyendo datos de genómica,
              transcriptómica, epigenómica, proteómica y metabolómica.
            </p>
            <div css={highlightsContainerStyles}>
              <div css={highlightItemStyles}>
                <div css={highlightNumberStyles}>27</div>
                <div css={highlightLabelStyles}>Grupos de investigación</div>
              </div>
              <div css={highlightItemStyles}>
                <div css={highlightNumberStyles}>13</div>
                <div css={highlightLabelStyles}>Comunidades autónomas</div>
              </div>
              <div css={highlightItemStyles}>
                <div css={highlightNumberStyles}>5+</div>
                <div css={highlightLabelStyles}>Tecnologías ómicas</div>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div css={cardsContainerStyles}>
            <Link href="/explorer">
              <a css={cardStyles}>
                <div css={cardIconContainerStyles}>
                  <img src="/images/icon-00.svg" alt="EGA Studies" css={cardIconStyles} />
                </div>
                <h3 css={cardTitleStyles}>Explorar Estudios EGA</h3>
                <p css={cardDescriptionStyles}>
                  Accede a estudios genómicos sobre ELA disponibles en el European Genome-phenome Archive
                </p>
                <div css={cardArrowStyles}>→</div>
              </a>
            </Link>

            <div css={cardDisabledStyles}>
              <div css={cardIconContainerStyles}>
                <img src="/images/icon-01.svg" alt="Data Visualization" css={cardIconStyles} />
              </div>
              <h3 css={cardTitleStyles}>Visualización de Datos</h3>
              <p css={cardDescriptionStyles}>
                Visualiza y analiza resultados de análisis multiómicos de datos de ELA
              </p>
              <div css={cardBadgeStyles}>Próximamente</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
});

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 20px;
  text-align: center;
`;

const contentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const logoContainerStyles = css`
  margin-bottom: 16px;
`;

const logoStyles = css`
  max-width: 400px;
  height: auto;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const titleStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-weight: 700;
  color: #003B75;
  font-size: 3.5rem;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const subtitleStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-weight: 300;
  color: #7C8795;
  max-width: 600px;
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const descriptionContainerStyles = css`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const descriptionStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-weight: 300;
  color: #333333;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
  text-align: left;
`;

const highlightsContainerStyles = css`
  display: flex;
  justify-content: space-around;
  gap: 24px;
  margin-top: 24px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const highlightItemStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const highlightNumberStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #003B75;
  margin-bottom: 8px;
`;

const highlightLabelStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  max-width: 150px;
`;

const cardsContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const cardStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #003B75;
    box-shadow: 0 10px 30px rgba(0, 59, 117, 0.15);
    transform: translateY(-4px);
    text-decoration: none;
  }

  &:hover div:last-child {
    transform: translateX(8px);
  }
`;

const cardDisabledStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  opacity: 0.6;
  cursor: not-allowed;
`;

const cardIconContainerStyles = css`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #003B75 0%, #00be9d 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 59, 117, 0.2);
`;

const cardIconStyles = css`
  width: 48px;
  height: 48px;
  filter: brightness(0) invert(1);
`;

const cardTitleStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #003B75;
  margin: 0 0 12px 0;
`;

const cardDescriptionStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

const cardArrowStyles = css`
  font-size: 2rem;
  color: #003B75;
  font-weight: bold;
  margin-top: 16px;
  transition: transform 0.3s ease;
`;

const cardBadgeStyles = css`
  font-family: 'Geomanist', 'Calibri', sans-serif;
  background-color: #7C8795;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 16px;
`;

export default HomePage;
