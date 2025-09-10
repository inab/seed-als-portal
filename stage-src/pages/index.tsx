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
import { Container, Stack, Typography, Button } from "@mui/material";
import { createPage } from "../global/utils/pages";
import PageLayout from '@/components/PageLayout';
import ExplorerPage from './explorer';

const HomePage = createPage({
  getInitialProps: async ({ query, egoJwt }) => {
		return { query, egoJwt };
	},
  isPublic: true,
})(() => {
  return (
    <PageLayout subtitle="Data Explorer">
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Stack spacing={3}>
          <Typography variant="h3">Seed-ALS Portal</Typography>
          <Typography variant="body1">
            Bienvenido/a. Explora estudios, datasets y ficheros del proyecto Seed-ALS.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/explorer" passHref legacyBehavior>
              <Button component="a" variant="contained">Explorar datos</Button>
            </Link>
            <Link href="/user" passHref legacyBehavior>
              <Button component="a" variant="outlined">Sobre el usuario</Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </PageLayout>
  
  );
});

export default HomePage;
