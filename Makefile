myaccount:
	cp src/myaccount/index.html.orig public/index.html
	cp src/myaccount/index.js.orig src/index.js
	yarn start

build_myaccount:
	cp src/myaccount/index.html.orig public/index.html
	cp src/myaccount/index.js.orig src/index.js
	rm -fr ~/.synopi/myaccount_pub
	yarn build
	cp -r build ~/.synopi/myaccount_pub

ems:
	cp src/ems/index.html.orig public/index.html
	cp src/ems/index.js.orig src/index.js
	yarn start

build_ems:
	cp src/ems/index.html.orig public/index.html
	cp src/ems/index.js.orig src/index.js
	rm -fr ~/.synopi/ems_pub
	yarn build
	cp -r build ~/.synopi/ems_pub

sboportal:
	cp src/sboportal/index.html.orig public/index.html
	cp src/sboportal/index.js.orig src/index.js
	yarn start

build_sboportal:
	cp src/sboportal/index.html.orig public/index.html
	cp src/sboportal/index.js.orig src/index.js
	sudo rm -fr /root/.synopi/sboportal_pub
	yarn build
	sudo cp -r build /root/.synopi/sboportal_pub

sboswitch:
	cp src/sboswitch/index.html.orig public/index.html
	cp src/sboswitch/index.js.orig src/index.js
	yarn start

build_sboswitch:
	cp src/sboswitch/index.html.orig public/index.html
	cp src/sboswitch/index.js.orig src/index.js
	sudo rm -fr /root/.synopi/sboswitch_pub
	yarn build
	sudo cp -r build /root/.synopi/sboswitch_pub

portfolio:
	cp src/portfolio/index.html.orig public/index.html
	cp src/portfolio/index.js.orig src/index.js
	yarn start

build_portfolio:
	cp src/portfolio/index.html.orig public/index.html
	cp src/portfolio/index.js.orig src/index.js
	#sudo rm -fr /root/.synopi/portfolio_pub
	yarn build
	tar -czf portfolio_pub.tgz build/
	scp portfolio_pub.tgz srv185:~/sources
	
	#sudo cp -r build /root/.synopi/portfolio_pub
