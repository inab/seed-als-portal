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
import { css, useTheme } from '@emotion/react';
import { useRouter } from 'next/router';

import UserDropdown from './UserDropdown';
import defaultTheme from './theme';
import { OvertureLogo } from './theme/icons';
import useAuthContext from '../global/hooks/useAuthContext';
import { InternalLink as Link } from './Link';
import { EXPLORER_PATH, USER_PATH } from '../global/utils/constants';
import { getConfig } from '../global/config';

const NavBar: React.ComponentType = () => {
	const { user } = useAuthContext();
	const router = useRouter();
	const theme: typeof defaultTheme = useTheme();

	const {
		NEXT_PUBLIC_AUTH_PROVIDER,
		NEXT_PUBLIC_LAB_NAME,
		NEXT_PUBLIC_LOGO_FILENAME,
		NEXT_PUBLIC_BASE_PATH,
	} = getConfig();

	const activeLinkStyle = `
    color: #00be9d;
  `;

	const labIcon = (
		<img
			src="/logos/SEED-ALS PNG/logo SEED-ALS_Azul.png"
			alt="SEED-ALS"
			height="80px"
		/>
	);

	return (
		<div
			css={(theme: typeof defaultTheme) => css`
				background-color: #f8f9fa;
				box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
				position: sticky;
				top: 0;
				left: 0;
				z-index: 5;
				width: 100%;
			`}
		>
			<div
				css={css`
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 80px;
					max-width: 1400px;
					margin: 0 auto;
					padding: 0 40px;

					@media (max-width: 768px) {
						padding: 0 20px;
					}
				`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
						cursor: pointer;
					`}
				>
					<Link path="/">
						<a
							css={(theme) => css`
							display: flex;
							align-items: center;
							text-decoration: none;
							color: ${theme.colors.accent_dark};
							font-family: 'Geomanist', 'Calibri', sans-serif;
							font-weight: 600;
							font-size: 1.2rem;
							transition: opacity 0.2s ease;

							&:hover {
								opacity: 0.8;
							}
						`}
						>
							{labIcon}
						</a>
					</Link>
				</div>
				<div
					css={css`
					display: flex;
					align-items: center;
				`}
				>
					<div
						css={(theme) => css`
						display: flex;
						align-items: center;
						justify-content: center;
						width: 160px;
						background-color: #f8f9fa;
						height: 100%;
						transition: all 0.2s ease;
						border-right: 1px solid ${theme.colors.grey_3};
					`}
					>
						<Link path={EXPLORER_PATH}>
							<a
								css={(theme) => css`
								display: flex;
								flex: 1;
								height: 100%;
								justify-content: center;
								align-items: center;
								text-decoration: none;
								color: ${theme.colors.accent_dark};
								cursor: pointer;
								font-family: 'Geomanist', 'Calibri', sans-serif;
								font-weight: 500;
								transition: all 0.2s ease;
								border-bottom: 2px solid transparent;
								${router.pathname === EXPLORER_PATH ? activeLinkStyle : ''}

								&:hover {
									color: #00be9d;
								}
							`}
							>
								Data Explorer
							</a>
						</Link>
					</div>

					<div
						css={(theme) => css`
						display: flex;
						align-items: center;
						justify-content: center;
						width: 180px;
						background-color: #f8f9fa;
						height: 100%;
						transition: all 0.2s ease;
					`}
					>
						<a
							href="https://seed-als.es/"
							target="_blank"
							rel="noopener noreferrer"
							css={(theme) => css`
							display: flex;
							flex: 1;
							height: 100%;
							justify-content: center;
							align-items: center;
							text-decoration: none;
							color: ${theme.colors.accent_dark};
							cursor: pointer;
							font-family: 'Geomanist', 'Calibri', sans-serif;
							font-weight: 500;
							transition: all 0.2s ease;
							border-bottom: 2px solid transparent;

							&:hover {
								color: #00be9d;
								text-decoration: none;
							}
						`}
						>
							Proyecto SEED-ALS
						</a>
					</div>

					{NEXT_PUBLIC_AUTH_PROVIDER && user && (
						<div
							css={(theme) => css`
							width: 195px;
							height: 100%;
							display: flex;
							${router.pathname === USER_PATH ? activeLinkStyle : ''}
							&:hover {
								background-color: ${theme.colors.grey_2};
							}
						`}
						>
							<UserDropdown />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
