/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  CoopCoin,
  CoopCoin_CoopTokenFees,
  CoopCoin_CoopTokenSecondaryRewards,
} from "generated";

CoopCoin.CoopTokenFees.handler(
  async ({ event, context }) => {
    const coopCoinId = `${event.chainId}_${event.block.number}_${event.logIndex}`;
    const coopCoinEntity: CoopCoin_CoopTokenFees = {
      id: coopCoinId,
      tokenCreator: event.params.tokenCreator,
      platformReferrer: event.params.platformReferrer,
      orderReferrer: event.params.orderReferrer,
      protocolFeeRecipient: event.params.protocolFeeRecipient,
      tokenCreatorFee: event.params.tokenCreatorFee,
      platformReferrerFee: event.params.platformReferrerFee,
      orderReferrerFee: event.params.orderReferrerFee,
      protocolFee: event.params.protocolFee,
      contract: event.srcAddress,
      transactionHash: event.transaction.hash,
      blockNumber: event.block.number,
    };
    context.CoopCoin_CoopTokenFees.set(coopCoinEntity);
  },
  { wildcard: true }
);

CoopCoin.CoopTokenSecondaryRewards.handler(
  async ({ event, context }) => {
    const coopCoinId = `${event.chainId}_${event.block.number}_${event.logIndex}`;
    const coopCoinEntity: CoopCoin_CoopTokenSecondaryRewards = {
      id: coopCoinId,
      contract: event.srcAddress,
      totalAmountEth: event.params.rewards[0],
      totalAmountToken: event.params.rewards[1],
      creatorAmountEth: event.params.rewards[2],
      creatorAmountToken: event.params.rewards[3],
      platformReferrerAmountEth: event.params.rewards[4],
      platformReferrerAmountToken: event.params.rewards[5],
      protocolAmountEth: event.params.rewards[6],
      protocolAmountToken: event.params.rewards[7],
      transactionHash: event.transaction.hash,
      blockNumber: event.block.number,
    };
    context.CoopCoin_CoopTokenSecondaryRewards.set(coopCoinEntity);
  },
  { wildcard: true }
);
