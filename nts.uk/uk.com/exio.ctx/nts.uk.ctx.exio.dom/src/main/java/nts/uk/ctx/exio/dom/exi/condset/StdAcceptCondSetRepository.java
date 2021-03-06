package nts.uk.ctx.exio.dom.exi.condset;

import java.util.List;
import java.util.Optional;

/**
 * 受入条件設定（定型）
 */
public interface StdAcceptCondSetRepository {

	/**
	 * Finds all standard acceptance condition settings by company id.
	 *
	 * @param companyId the company id
	 * @return the <code>StdAcceptCondSet</code> domain list
	 */
	List<StdAcceptCondSet> findAllStdAcceptCondSetsByCompanyId(String companyId);

	/**
	 * Gets standard acceptance condition settings.
	 *
	 * @param cid     the company id
	 * @param sysType the system type
	 * @return the <code>StdAcceptCondSet</code> domain list
	 */
	List<StdAcceptCondSet> getAllStdAcceptCondSet(String cid);
	
	/**
	 * システム区分から受入条件設定（定型）を取得
	 * @param cid
	 * @param sysType
	 * @return
	 */
	List<StdAcceptCondSet> getStdAcceptCondSetBySysType(String cid, int sysType);
	
	/**
	 * get StdAcceptCondSet by list System type and companyId
	 * @param cid
	 * @param sysType
	 * @return
	 */
	List<StdAcceptCondSet> getStdAcceptCondSetByListSys(String cid, List<Integer> sysType);
	
	/**
	 * Gets standard acceptance condition setting by id.
	 *
	 * @param cid            the company id
	 * @param sysType        the system type
	 * @param conditionSetCd the condition set code
	 * @return the optional of domain standard acceptance condition setting
	 */
	Optional<StdAcceptCondSet> getById(String cid, String conditionSetCd);

	/**
	 * Add.
	 *
	 * @param domain the domain
	 */
	void add(StdAcceptCondSet domain);

	/**
	 * Update.
	 *
	 * @param domain the domain
	 */
	void update(StdAcceptCondSet domain);

	/**
	 * Update from d.
	 *
	 * @param domain the domain
	 */
	void updateFromD(StdAcceptCondSet domain);
	
	/**
	 * update System
	 * @param conditionSetCd
	 * @param system
	 */
	void updateSystem(String cid, String conditionSetCd, int system);

	/**
	 * Remove.
	 *
	 * @param cid            the company id
	 * @param sysType        the system type
	 * @param conditionSetCd the condition set code
	 */
	void remove(String cid, int sysType, String conditionSetCd);

	/**
	 * Is setting code exist boolean.
	 *
	 * @param cid            the company id
	 * @param sysType        the system type
	 * @param conditionSetCd the condition set code
	 * @return the boolean
	 */
	boolean isSettingCodeExist(String cid, String conditionSetCd);
	
	

}
