// Eu verifico os links que a Home e o PDF usam para identificar a entrega correta.
import test from 'node:test';
import assert from 'node:assert/strict';
import { ENTREGA } from '../src/data/entrega.js';

test('entrega da Fase 7 aponta para o repositório solo e mantém o pitch anterior', () => {
  assert.equal(ENTREGA.fase, 7);
  assert.equal(ENTREGA.pitchUrl, '');
  assert.equal(ENTREGA.pitchAnteriorUrl, 'https://youtu.be/BJ_unP9lmys');
  assert.notEqual(ENTREGA.pitchUrl, ENTREGA.pitchAnteriorUrl);
  assert.equal(Object.isFrozen(ENTREGA), true);
});

test('endereço de deploy aponta para o site publicado com HTTPS', () => {
  const deploy = new URL(ENTREGA.deployUrl);
  assert.equal(deploy.protocol, 'https:');
  assert.equal(deploy.hostname, 'devourerhope.github.io');
  assert.equal(deploy.pathname, '/site_seederlink-fase7/');
});
