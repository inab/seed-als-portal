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
import { css } from '@emotion/react';
import defaultTheme from './theme';
import { OvertureLogoWithText } from './theme/icons';
import StyledLink from './Link';
import { HELP_URL } from '../global/utils/constants';
import { getConfig } from '../global/config';

const Footer = () => {
	const { NEXT_PUBLIC_UI_VERSION } = getConfig();

	return (
		<div
			css={(theme: typeof defaultTheme) => css`
				min-height: ${theme.dimensions.footer.height * 2}px;
				background-color: #f8f9fa;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 20px 18px;
				box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.12);
				z-index: 10;
				position: relative;
			`}
		>
			{/* Financing section */}
			<div css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 20px;
				text-align: center;
			`}>
				<img
					src="/images/financing-logos.png"
					alt="Logos de financiación"
					css={css`
						max-width: 700px;
						height: auto;
						width: 100%;
						margin-bottom: 15px;
						@media (max-width: 768px) {
							max-width: 90%;
						}
					`}
				/>
				<div css={(theme) => css`
					font-family: 'Geomanist', 'Calibri', sans-serif;
					font-size: 9px;
					font-weight: 400;
					line-height: 1.4;
					max-width: 800px;
				`}>
					<p css={css`margin: 0 0 8px 0; font-weight: 600;`}>
						PMPER24/00017 (IP. ADOLFO LÓPEZ DE MUNAIN)
					</p>
					<p css={css`margin: 0;`}>
						ENTIDAD FINANCIADORA: INSTITUTO DE SALUD CARLOS III (ISCIII). PROYECTO FINANCIADO CON CARGO A FONDOS NEXTGENERATION EU, QUE FINANCIAN LAS ACTUACIONES DEL MRR
					</p>
				</div>
			</div>

			{/* Original footer content */}
			<div css={css`
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 15px;
				flex-wrap: wrap;
			`}>
				<StyledLink
					css={(theme) => css`
						${theme.typography.subheading2};
					`}
					href={HELP_URL}
					target="_blank"
				>
					Help
				</StyledLink>
				<span css={css`color: #ccc;`}>|</span>
				<span
					css={(theme) =>
						css`
							color: ${theme.colors.accent_dark};
							${theme.typography.subheading2}
							line-height: 24px;
							font-weight: normal;
						`
					}
				>
					{NEXT_PUBLIC_UI_VERSION && `UI v${NEXT_PUBLIC_UI_VERSION}`} powered by
				</span>
				<a
					href="https://www.overture.bio/"
					target="_blank"
					rel="noopener noreferrer"
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					<OvertureLogoWithText width={100} height={18} />
				</a>
				<span css={css`color: #ccc;`}>|</span>
				<a
					href="https://www.bsc.es/es"
					target="_blank"
					rel="noopener noreferrer"
					css={css`
						display: flex;
						align-items: center;
					`}
				>
					<img
						src="/images/BSC-blue.svg"
						alt="Barcelona Supercomputing Center"
						css={css`
							height: 24px;
							width: auto;
						`}
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
