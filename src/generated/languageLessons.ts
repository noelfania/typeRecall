import type { LanguageTrack } from '../data/languageLessonTypes';

export const languageTracks: LanguageTrack[] = [
  {
    "id": "bash-shell",
    "label": "Bash / Shell",
    "folderName": "bash-shell",
    "lessons": [
      {
        "id": "language-bash-shell-p01",
        "title": "P01.파일-탐색-검색",
        "fileName": "P01.파일-탐색-검색.yaml",
        "sourcePath": "assets/raw/syntax/bash-shell/P01.파일-탐색-검색.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-bash-shell-p01-part-1",
            "title": "현재 경로[pwd]",
            "content": "pwd",
            "displayContent": "# 현재 경로[pwd]\npwd"
          },
          {
            "id": "language-bash-shell-p01-part-2",
            "title": "목록[ls]",
            "content": "ls\nls -al",
            "displayContent": "# 목록[ls]\nls\nls -al"
          },
          {
            "id": "language-bash-shell-p01-part-3",
            "title": "이동[cd]",
            "content": "cd ~/project\ncd -\ncd ..",
            "displayContent": "# 이동[cd]\ncd ~/project\ncd -\ncd .."
          },
          {
            "id": "language-bash-shell-p01-part-4",
            "title": "만들기[mkdir touch]",
            "content": "mkdir logs\nmkdir -p app/cache/images\ntouch app.log",
            "displayContent": "# 만들기[mkdir touch]\nmkdir logs\nmkdir -p app/cache/images\ntouch app.log"
          },
          {
            "id": "language-bash-shell-p01-part-5",
            "title": "복사·이동·삭제[cp mv rm]",
            "content": "cp -r src/ dest/\nmv file.txt docs/\nrm -rf folder/",
            "displayContent": "# 복사·이동·삭제[cp mv rm]\ncp -r src/ dest/\nmv file.txt docs/\nrm -rf folder/"
          },
          {
            "id": "language-bash-shell-p01-part-6",
            "title": "내용 보기[cat head tail]",
            "content": "cat app.log\nhead -n 20 app.log\ntail -n 50 app.log\ntail -f app.log",
            "displayContent": "# 내용 보기[cat head tail]\ncat app.log\nhead -n 20 app.log\ntail -n 50 app.log\ntail -f app.log"
          },
          {
            "id": "language-bash-shell-p01-part-7",
            "title": "검색[grep]",
            "content": "grep \"keyword\" file.txt\ngrep -rn \"keyword\" src",
            "displayContent": "# 검색[grep]\ngrep \"keyword\" file.txt\ngrep -rn \"keyword\" src"
          },
          {
            "id": "language-bash-shell-p01-part-8",
            "title": "파일 찾기[find]",
            "content": "find . -name \"*.sh\"\nfind . -type d -name \"node_modules\"",
            "displayContent": "# 파일 찾기[find]\nfind . -name \"*.sh\"\nfind . -type d -name \"node_modules\""
          },
          {
            "id": "language-bash-shell-p01-part-9",
            "title": "리다이렉션[> >>]",
            "content": "echo \"first\" > app.log\necho \"log\" >> app.log",
            "displayContent": "# 리다이렉션[> >>]\n# > 덮어쓰기, >> 이어쓰기\necho \"first\" > app.log\necho \"log\" >> app.log"
          },
          {
            "id": "language-bash-shell-p01-part-10",
            "title": "파이프[|]",
            "content": "ls -al | grep \".sh\"\nps aux | grep nginx",
            "displayContent": "# 파이프[|]\nls -al | grep \".sh\"\nps aux | grep nginx"
          }
        ]
      },
      {
        "id": "language-bash-shell-p02",
        "title": "P02.권한-프로세스-네트워크",
        "fileName": "P02.권한-프로세스-네트워크.yaml",
        "sourcePath": "assets/raw/syntax/bash-shell/P02.권한-프로세스-네트워크.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-bash-shell-p02-part-1",
            "title": "권한[chmod]",
            "content": "chmod +x script.sh\nchmod 755 script.sh",
            "displayContent": "# 권한[chmod]\nchmod +x script.sh\nchmod 755 script.sh"
          },
          {
            "id": "language-bash-shell-p02-part-2",
            "title": "소유권[chown]",
            "content": "chown user:group file.txt\nsudo chown -R www-data:www-data /var/www/app",
            "displayContent": "# 소유권[chown]\nchown user:group file.txt\nsudo chown -R www-data:www-data /var/www/app"
          },
          {
            "id": "language-bash-shell-p02-part-3",
            "title": "프로세스[ps kill]",
            "content": "ps aux | grep nginx\nkill 12345\nkill -9 12345",
            "displayContent": "# 프로세스[ps kill]\nps aux | grep nginx\nkill 12345\nkill -9 12345"
          },
          {
            "id": "language-bash-shell-p02-part-4",
            "title": "백그라운드[jobs fg bg]",
            "content": "sleep 60 &\njobs\nfg %1\nbg %1",
            "displayContent": "# 백그라운드[jobs fg bg]\nsleep 60 &\njobs\nfg %1\nbg %1"
          },
          {
            "id": "language-bash-shell-p02-part-5",
            "title": "네트워크[curl ping]",
            "content": "ping -c 3 example.com\ncurl -I https://example.com\ncurl -s https://example.com/api/health",
            "displayContent": "# 네트워크[curl ping]\nping -c 3 example.com\ncurl -I https://example.com\ncurl -s https://example.com/api/health"
          },
          {
            "id": "language-bash-shell-p02-part-6",
            "title": "포트 확인[ss]",
            "content": "ss -tulpn\nss -tulpn | grep 80",
            "displayContent": "# 포트 확인[ss]\n# netstat 대신 ss를 자주 쓴다\nss -tulpn\nss -tulpn | grep 80"
          },
          {
            "id": "language-bash-shell-p02-part-7",
            "title": "압축[tar]",
            "content": "tar -czvf archive.tar.gz folder/\ntar -xzvf archive.tar.gz",
            "displayContent": "# 압축[tar]\ntar -czvf archive.tar.gz folder/\ntar -xzvf archive.tar.gz"
          },
          {
            "id": "language-bash-shell-p02-part-8",
            "title": "zip[unzip]",
            "content": "unzip archive.zip\nunzip -l archive.zip",
            "displayContent": "# zip[unzip]\nunzip archive.zip\nunzip -l archive.zip"
          },
          {
            "id": "language-bash-shell-p02-part-9",
            "title": "환경 변수[export]",
            "content": "echo $PATH\nexport JAVA_HOME=/usr/lib/jvm/java-17\nexport PATH=\"$JAVA_HOME/bin:$PATH\"",
            "displayContent": "# 환경 변수[export]\necho $PATH\nexport JAVA_HOME=/usr/lib/jvm/java-17\nexport PATH=\"$JAVA_HOME/bin:$PATH\""
          },
          {
            "id": "language-bash-shell-p02-part-10",
            "title": "히스토리[history]",
            "content": "history\nhistory | grep curl\n!!",
            "displayContent": "# 히스토리[history]\n# Ctrl+R = 이전 명령 검색, Ctrl+C = 중단\nhistory\nhistory | grep curl\n!!"
          }
        ]
      },
      {
        "id": "language-bash-shell-p03",
        "title": "P03.스크립트-실무조합",
        "fileName": "P03.스크립트-실무조합.yaml",
        "sourcePath": "assets/raw/syntax/bash-shell/P03.스크립트-실무조합.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-bash-shell-p03-part-1",
            "title": "스크립트 시작[shebang]",
            "content": "set -euo pipefail\necho \"start\"",
            "displayContent": "# 스크립트 시작[shebang]\n# 파일 첫 줄에 #!/bin/bash 를 둔다 (주석이 아니라 인터프리터 지정)\nset -euo pipefail\necho \"start\""
          },
          {
            "id": "language-bash-shell-p03-part-2",
            "title": "변수[variable]",
            "content": "NAME=\"kim\"\necho \"hello $NAME\"\necho \"home=$HOME\"",
            "displayContent": "# 변수[variable]\nNAME=\"kim\"\necho \"hello $NAME\"\necho \"home=$HOME\""
          },
          {
            "id": "language-bash-shell-p03-part-3",
            "title": "조건문[if]",
            "content": "if [ -f app.log ]; then\n  echo \"log exists\"\nelse\n  echo \"no log\"\nfi",
            "displayContent": "# 조건문[if]\nif [ -f app.log ]; then\n  echo \"log exists\"\nelse\n  echo \"no log\"\nfi"
          },
          {
            "id": "language-bash-shell-p03-part-4",
            "title": "반복문[for]",
            "content": "for f in *.txt; do\n  echo \"File: $f\"\ndone",
            "displayContent": "# 반복문[for]\nfor f in *.txt; do\n  echo \"File: $f\"\ndone"
          },
          {
            "id": "language-bash-shell-p03-part-5",
            "title": "/ || 연결",
            "content": "mkdir -p temp_dir && echo \"created\"\nls not_found.txt || echo \"fallback\"",
            "displayContent": "# && / || 연결\nmkdir -p temp_dir && echo \"created\"\nls not_found.txt || echo \"fallback\""
          },
          {
            "id": "language-bash-shell-p03-part-6",
            "title": "실행 권한 후 실행[chmod +x]",
            "content": "chmod +x deploy.sh\n./deploy.sh",
            "displayContent": "# 실행 권한 후 실행[chmod +x]\nchmod +x deploy.sh\n./deploy.sh"
          },
          {
            "id": "language-bash-shell-p03-part-7",
            "title": "로그 찾기 조합[find + grep]",
            "content": "find . -name \"*.log\" | xargs grep \"ERROR\"\ngrep -rn \"ERROR\" /var/log/app",
            "displayContent": "# 로그 찾기 조합[find + grep]\nfind . -name \"*.log\" | xargs grep \"ERROR\"\ngrep -rn \"ERROR\" /var/log/app"
          },
          {
            "id": "language-bash-shell-p03-part-8",
            "title": "wget 다운로드",
            "content": "wget https://example.com/file.tar.gz\nwget -O out.tar.gz https://example.com/file.tar.gz",
            "displayContent": "# wget 다운로드\nwget https://example.com/file.tar.gz\nwget -O out.tar.gz https://example.com/file.tar.gz"
          },
          {
            "id": "language-bash-shell-p03-part-9",
            "title": "디스크·용량[df du]",
            "content": "df -h\ndu -sh *",
            "displayContent": "# 디스크·용량[df du]\ndf -h\ndu -sh *"
          },
          {
            "id": "language-bash-shell-p03-part-10",
            "title": "배포 전 점검 루틴[check]",
            "content": "pwd\ngit status\ncurl -I https://example.com\nss -tulpn | grep 3000",
            "displayContent": "# 배포 전 점검 루틴[check]\npwd\ngit status\ncurl -I https://example.com\nss -tulpn | grep 3000"
          }
        ]
      }
    ]
  },
  {
    "id": "csharp-unity",
    "label": "C# for Unity",
    "folderName": "csharp-unity",
    "lessons": [
      {
        "id": "language-csharp-unity-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/csharp-unity/P01.기본-패턴.yaml",
        "language": "csharp",
        "parts": [
          {
            "id": "language-csharp-unity-p01-part-1",
            "title": "MonoBehaviour 골격[MonoBehaviour]",
            "content": "using UnityEngine;\n\npublic class Player : MonoBehaviour\n{\n    void Start()\n    {\n        Debug.Log(\"start\");\n    }\n\n    void Update()\n    {\n    }\n}",
            "displayContent": "// MonoBehaviour 골격[MonoBehaviour]\nusing UnityEngine;\n\npublic class Player : MonoBehaviour\n{\n    void Start()\n    {\n        Debug.Log(\"start\");\n    }\n\n    void Update()\n    {\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-2",
            "title": "SerializeField[인스펙터 노출]",
            "content": "using UnityEngine;\n\npublic class Player : MonoBehaviour\n{\n    [SerializeField] private float moveSpeed = 5f;\n    [SerializeField] private int maxHp = 100;\n}",
            "displayContent": "// SerializeField[인스펙터 노출]\n// private이지만 인스펙터에서 값을 넣을 수 있다\nusing UnityEngine;\n\npublic class Player : MonoBehaviour\n{\n    [SerializeField] private float moveSpeed = 5f;\n    [SerializeField] private int maxHp = 100;\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-3",
            "title": "Transform 이동[transform]",
            "content": "using UnityEngine;\n\npublic class Mover : MonoBehaviour\n{\n    [SerializeField] private float speed = 3f;\n\n    void Update()\n    {\n        transform.Translate(Vector3.forward * speed * Time.deltaTime);\n    }\n}",
            "displayContent": "// Transform 이동[transform]\nusing UnityEngine;\n\npublic class Mover : MonoBehaviour\n{\n    [SerializeField] private float speed = 3f;\n\n    void Update()\n    {\n        transform.Translate(Vector3.forward * speed * Time.deltaTime);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-4",
            "title": "GetComponent[컴포넌트 가져오기]",
            "content": "using UnityEngine;\n\npublic class HealthUI : MonoBehaviour\n{\n    private Rigidbody rb;\n\n    void Awake()\n    {\n        rb = GetComponent<Rigidbody>();\n    }\n}",
            "displayContent": "// GetComponent[컴포넌트 가져오기]\nusing UnityEngine;\n\npublic class HealthUI : MonoBehaviour\n{\n    private Rigidbody rb;\n\n    void Awake()\n    {\n        rb = GetComponent<Rigidbody>();\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-5",
            "title": "null 체크[null check]",
            "content": "using UnityEngine;\n\npublic class TargetFinder : MonoBehaviour\n{\n    [SerializeField] private Transform target;\n\n    void Update()\n    {\n        if (target == null)\n        {\n            return;\n        }\n\n        transform.LookAt(target);\n    }\n}",
            "displayContent": "// null 체크[null check]\nusing UnityEngine;\n\npublic class TargetFinder : MonoBehaviour\n{\n    [SerializeField] private Transform target;\n\n    void Update()\n    {\n        if (target == null)\n        {\n            return;\n        }\n\n        transform.LookAt(target);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-6",
            "title": "Input 입력[Input]",
            "content": "using UnityEngine;\n\npublic class PlayerInput : MonoBehaviour\n{\n    void Update()\n    {\n        float h = Input.GetAxis(\"Horizontal\");\n        float v = Input.GetAxis(\"Vertical\");\n        transform.Translate(new Vector3(h, 0f, v) * Time.deltaTime);\n    }\n}",
            "displayContent": "// Input 입력[Input]\nusing UnityEngine;\n\npublic class PlayerInput : MonoBehaviour\n{\n    void Update()\n    {\n        float h = Input.GetAxis(\"Horizontal\");\n        float v = Input.GetAxis(\"Vertical\");\n        transform.Translate(new Vector3(h, 0f, v) * Time.deltaTime);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-7",
            "title": "Instantiate / Destroy",
            "content": "using UnityEngine;\n\npublic class Spawner : MonoBehaviour\n{\n    [SerializeField] private GameObject bulletPrefab;\n\n    void Fire()\n    {\n        GameObject bullet = Instantiate(bulletPrefab, transform.position, transform.rotation);\n        Destroy(bullet, 2f);\n    }\n}",
            "displayContent": "// Instantiate / Destroy\nusing UnityEngine;\n\npublic class Spawner : MonoBehaviour\n{\n    [SerializeField] private GameObject bulletPrefab;\n\n    void Fire()\n    {\n        GameObject bullet = Instantiate(bulletPrefab, transform.position, transform.rotation);\n        Destroy(bullet, 2f);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p01-part-8",
            "title": "태그로 찾기[FindWithTag]",
            "content": "using UnityEngine;\n\npublic class EnemyAI : MonoBehaviour\n{\n    private Transform player;\n\n    void Start()\n    {\n        GameObject go = GameObject.FindWithTag(\"Player\");\n        if (go != null)\n        {\n            player = go.transform;\n        }\n    }\n}",
            "displayContent": "// 태그로 찾기[FindWithTag]\nusing UnityEngine;\n\npublic class EnemyAI : MonoBehaviour\n{\n    private Transform player;\n\n    void Start()\n    {\n        GameObject go = GameObject.FindWithTag(\"Player\");\n        if (go != null)\n        {\n            player = go.transform;\n        }\n    }\n}"
          }
        ]
      },
      {
        "id": "language-csharp-unity-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/csharp-unity/P02.실무-패턴.yaml",
        "language": "csharp",
        "parts": [
          {
            "id": "language-csharp-unity-p02-part-1",
            "title": "OnTriggerEnter[트리거]",
            "content": "using UnityEngine;\n\npublic class Coin : MonoBehaviour\n{\n    void OnTriggerEnter(Collider other)\n    {\n        if (other.CompareTag(\"Player\"))\n        {\n            Destroy(gameObject);\n        }\n    }\n}",
            "displayContent": "// OnTriggerEnter[트리거]\nusing UnityEngine;\n\npublic class Coin : MonoBehaviour\n{\n    void OnTriggerEnter(Collider other)\n    {\n        if (other.CompareTag(\"Player\"))\n        {\n            Destroy(gameObject);\n        }\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-2",
            "title": "코루틴[IEnumerator]",
            "content": "using System.Collections;\nusing UnityEngine;\n\npublic class DamageFlash : MonoBehaviour\n{\n    IEnumerator Flash()\n    {\n        yield return new WaitForSeconds(0.2f);\n        Debug.Log(\"flash done\");\n    }\n\n    void Start()\n    {\n        StartCoroutine(Flash());\n    }\n}",
            "displayContent": "// 코루틴[IEnumerator]\nusing System.Collections;\nusing UnityEngine;\n\npublic class DamageFlash : MonoBehaviour\n{\n    IEnumerator Flash()\n    {\n        yield return new WaitForSeconds(0.2f);\n        Debug.Log(\"flash done\");\n    }\n\n    void Start()\n    {\n        StartCoroutine(Flash());\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-3",
            "title": "List 사용[List]",
            "content": "using System.Collections.Generic;\nusing UnityEngine;\n\npublic class Inventory : MonoBehaviour\n{\n    private readonly List<string> items = new List<string>();\n\n    void AddItem(string name)\n    {\n        items.Add(name);\n        Debug.Log(items.Count);\n    }\n}",
            "displayContent": "// List 사용[List]\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class Inventory : MonoBehaviour\n{\n    private readonly List<string> items = new List<string>();\n\n    void AddItem(string name)\n    {\n        items.Add(name);\n        Debug.Log(items.Count);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-4",
            "title": "이벤트[Action]",
            "content": "using System;\nusing UnityEngine;\n\npublic class Health : MonoBehaviour\n{\n    public event Action<int> OnHpChanged;\n\n    private int hp = 100;\n\n    public void TakeDamage(int amount)\n    {\n        hp -= amount;\n        OnHpChanged?.Invoke(hp);\n    }\n}",
            "displayContent": "// 이벤트[Action]\nusing System;\nusing UnityEngine;\n\npublic class Health : MonoBehaviour\n{\n    public event Action<int> OnHpChanged;\n\n    private int hp = 100;\n\n    public void TakeDamage(int amount)\n    {\n        hp -= amount;\n        OnHpChanged?.Invoke(hp);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-5",
            "title": "싱글톤 최소[Instance]",
            "content": "using UnityEngine;\n\npublic class GameManager : MonoBehaviour\n{\n    public static GameManager Instance { get; private set; }\n\n    void Awake()\n    {\n        if (Instance != null)\n        {\n            Destroy(gameObject);\n            return;\n        }\n\n        Instance = this;\n    }\n}",
            "displayContent": "// 싱글톤 최소[Instance]\n// 남용하지 말고, 게임 매니저 정도에만\nusing UnityEngine;\n\npublic class GameManager : MonoBehaviour\n{\n    public static GameManager Instance { get; private set; }\n\n    void Awake()\n    {\n        if (Instance != null)\n        {\n            Destroy(gameObject);\n            return;\n        }\n\n        Instance = this;\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-6",
            "title": "레이어 마스크[LayerMask]",
            "content": "using UnityEngine;\n\npublic class GroundCheck : MonoBehaviour\n{\n    [SerializeField] private LayerMask groundMask;\n    [SerializeField] private float distance = 1f;\n\n    bool IsGrounded()\n    {\n        return Physics.Raycast(transform.position, Vector3.down, distance, groundMask);\n    }\n}",
            "displayContent": "// 레이어 마스크[LayerMask]\nusing UnityEngine;\n\npublic class GroundCheck : MonoBehaviour\n{\n    [SerializeField] private LayerMask groundMask;\n    [SerializeField] private float distance = 1f;\n\n    bool IsGrounded()\n    {\n        return Physics.Raycast(transform.position, Vector3.down, distance, groundMask);\n    }\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-7",
            "title": "ScriptableObject[데이터]",
            "content": "using UnityEngine;\n\n[CreateAssetMenu(menuName = \"Game/EnemyData\")]\npublic class EnemyData : ScriptableObject\n{\n    public string enemyName;\n    public int maxHp = 50;\n    public float moveSpeed = 2f;\n}",
            "displayContent": "// ScriptableObject[데이터]\n// 밸런스·설정을 에셋으로 분리할 때\nusing UnityEngine;\n\n[CreateAssetMenu(menuName = \"Game/EnemyData\")]\npublic class EnemyData : ScriptableObject\n{\n    public string enemyName;\n    public int maxHp = 50;\n    public float moveSpeed = 2f;\n}"
          },
          {
            "id": "language-csharp-unity-p02-part-8",
            "title": "RequireComponent[의존 강제]",
            "content": "using UnityEngine;\n\n[RequireComponent(typeof(Rigidbody))]\npublic class Knockback : MonoBehaviour\n{\n    private Rigidbody rb;\n\n    void Awake()\n    {\n        rb = GetComponent<Rigidbody>();\n    }\n}",
            "displayContent": "// RequireComponent[의존 강제]\nusing UnityEngine;\n\n[RequireComponent(typeof(Rigidbody))]\npublic class Knockback : MonoBehaviour\n{\n    private Rigidbody rb;\n\n    void Awake()\n    {\n        rb = GetComponent<Rigidbody>();\n    }\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "css",
    "label": "CSS",
    "folderName": "css",
    "lessons": [
      {
        "id": "language-css-p01",
        "title": "P01.핵심-패턴",
        "fileName": "P01.핵심-패턴.yaml",
        "sourcePath": "assets/raw/syntax/css/P01.핵심-패턴.yaml",
        "language": "css",
        "parts": [
          {
            "id": "language-css-p01-part-1",
            "title": "박스 크기 기준[box-sizing] 통일",
            "content": "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}",
            "displayContent": "/* 박스 크기 기준[box-sizing] 통일 — 패딩·보더 포함 계산 */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}"
          },
          {
            "id": "language-css-p01-part-2",
            "title": "전역 변수[custom property] 정의",
            "content": ":root {\n  --bg-color: #f5f7fb;\n  --accent-color: #2563eb;\n  --gap-size: 16px;\n}",
            "displayContent": "/* 전역 변수[custom property] 정의 */\n:root {\n  --bg-color: #f5f7fb;\n  --accent-color: #2563eb;\n  --gap-size: 16px;\n}"
          },
          {
            "id": "language-css-p01-part-3",
            "title": "전역 변수 사용[var()]",
            "content": "body {\n  background: var(--bg-color);\n  color: var(--text-color, #1f2937);\n}",
            "displayContent": "/* 전역 변수 사용[var()] — 두 번째 인자는 기본값 */\nbody {\n  background: var(--bg-color);\n  color: var(--text-color, #1f2937);\n}"
          },
          {
            "id": "language-css-p01-part-4",
            "title": "화면 중앙 배치[place-items]",
            "content": ".page-wrapper {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n}",
            "displayContent": "/* 화면 중앙 배치[place-items] — grid 한 줄 중앙 정렬 */\n.page-wrapper {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n}"
          },
          {
            "id": "language-css-p01-part-5",
            "title": "카드 그리드[card grid]",
            "content": ".card-grid {\n  width: min(900px, 100%);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-size);\n}",
            "displayContent": "/* 카드 그리드[card grid] — min()으로 최대폭 제한 */\n.card-grid {\n  width: min(900px, 100%);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-size);\n}"
          },
          {
            "id": "language-css-p01-part-6",
            "title": "카드 스타일[card surface]",
            "content": ".card-item {\n  background: #ffffff;\n  border: 1px solid #dbe3f0;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n}",
            "displayContent": "/* 카드 스타일[card surface] — 면·테두리·그림자 */\n.card-item {\n  background: #ffffff;\n  border: 1px solid #dbe3f0;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);\n}"
          },
          {
            "id": "language-css-p01-part-7",
            "title": "상태 변형[state modifier]",
            "content": ".card-item.is-active {\n  border-color: var(--accent-color);\n  transform: translateY(-4px);\n}",
            "displayContent": "/* 상태 변형[state modifier] — is-active 클래스로 강조 */\n.card-item.is-active {\n  border-color: var(--accent-color);\n  transform: translateY(-4px);\n}"
          },
          {
            "id": "language-css-p01-part-8",
            "title": "버튼 상태[hover / disabled]",
            "content": ".primary-button:hover {\n  opacity: 0.9;\n}\n\n.primary-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
            "displayContent": "/* 버튼 상태[hover / disabled] */\n.primary-button:hover {\n  opacity: 0.9;\n}\n\n.primary-button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}"
          },
          {
            "id": "language-css-p01-part-9",
            "title": "의사 요소[pseudo element]",
            "content": ".badge-text::before {\n  content: \"#\";\n  margin-right: 4px;\n  color: var(--accent-color);\n}",
            "displayContent": "/* 의사 요소[pseudo element] — 콘텐츠 앞에 장식 삽입 */\n.badge-text::before {\n  content: \"#\";\n  margin-right: 4px;\n  color: var(--accent-color);\n}"
          },
          {
            "id": "language-css-p01-part-10",
            "title": "반응형[media query]",
            "content": "@media (max-width: 768px) {\n  .card-grid {\n    grid-template-columns: 1fr;\n  }\n}",
            "displayContent": "/* 반응형[media query] — 모바일에서 1열로 */\n@media (max-width: 768px) {\n  .card-grid {\n    grid-template-columns: 1fr;\n  }\n}"
          },
          {
            "id": "language-css-p01-part-11",
            "title": "카드 마크업[card markup]",
            "content": "<article class=\"card-item is-active\">\n  <h1 class=\"title-text\">카드 1</h1>\n  <p class=\"badge-text\">active</p>\n  <button class=\"primary-button\">확인</button>\n  <button class=\"primary-button\" disabled>대기</button>\n</article>",
            "displayContent": "/* 카드 마크업[card markup] — 위 스타일이 걸리는 구조 */\n<article class=\"card-item is-active\">\n  <h1 class=\"title-text\">카드 1</h1>\n  <p class=\"badge-text\">active</p>\n  <button class=\"primary-button\">확인</button>\n  <button class=\"primary-button\" disabled>대기</button>\n</article>"
          }
        ]
      },
      {
        "id": "language-css-p02",
        "title": "P02.부모-자식-배치",
        "fileName": "P02.부모-자식-배치.yaml",
        "sourcePath": "assets/raw/syntax/css/P02.부모-자식-배치.yaml",
        "language": "css",
        "parts": [
          {
            "id": "language-css-p02-part-1",
            "title": "글자 정렬[text-align]",
            "content": ".text-left   { text-align: left; }\n.text-center { text-align: center; }\n.text-right  { text-align: right; }",
            "displayContent": "/* 글자 정렬[text-align] — 인라인 내용에만 적용 */\n.text-left   { text-align: left; }\n.text-center { text-align: center; }\n.text-right  { text-align: right; }"
          },
          {
            "id": "language-css-p02-part-2",
            "title": "flex 가로 배치[row layout]",
            "content": ".row-parent {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}",
            "displayContent": "/* flex 가로 배치[row layout] — 부모가 자식 위치를 잡는다 */\n.row-parent {\n  display: flex;\n  justify-content: space-between; /* 가로축[main axis] */\n  align-items: center;            /* 세로축[cross axis] */\n  gap: 12px;\n}"
          },
          {
            "id": "language-css-p02-part-3",
            "title": "flex 중앙 정렬[center]",
            "content": ".center-parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}",
            "displayContent": "/* flex 중앙 정렬[center] — 자식 하나를 정중앙에 */\n.center-parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 160px;\n}"
          },
          {
            "id": "language-css-p02-part-4",
            "title": "flex 세로 배치[column layout]",
            "content": ".column-parent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 12px;\n}",
            "displayContent": "/* flex 세로 배치[column layout] — 축이 바뀌면 justify/align 역할도 바뀜 */\n.column-parent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 12px;\n}"
          },
          {
            "id": "language-css-p02-part-5",
            "title": "grid 칸 나누기[grid layout]",
            "content": ".grid-parent {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}",
            "displayContent": "/* grid 칸 나누기[grid layout] — 부모가 칸을 만들고 자식을 배치 */\n.grid-parent {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}"
          },
          {
            "id": "language-css-p02-part-6",
            "title": "grid 중앙 정렬[place-items]",
            "content": ".grid-center {\n  display: grid;\n  place-items: center;\n  min-height: 180px;\n}",
            "displayContent": "/* grid 중앙 정렬[place-items] — 가로+세로 한 번에 */\n.grid-center {\n  display: grid;\n  place-items: center;\n  min-height: 180px;\n}"
          },
          {
            "id": "language-css-p02-part-7",
            "title": "배치 마크업[layout markup]",
            "content": "<div class=\"row-parent\">\n  <div class=\"box\">A</div>\n  <div class=\"box\">B</div>\n  <div class=\"box\">C</div>\n</div>",
            "displayContent": "/* 배치 마크업[layout markup] — 부모 클래스 아래 자식 박스 */\n<div class=\"row-parent\">\n  <div class=\"box\">A</div>\n  <div class=\"box\">B</div>\n  <div class=\"box\">C</div>\n</div>"
          }
        ]
      }
    ]
  },
  {
    "id": "docker",
    "label": "Docker",
    "folderName": "docker",
    "lessons": [
      {
        "id": "language-docker-p01",
        "title": "P01.컨테이너-이미지-기본",
        "fileName": "P01.컨테이너-이미지-기본.yaml",
        "sourcePath": "assets/raw/syntax/docker/P01.컨테이너-이미지-기본.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-docker-p01-part-1",
            "title": "실행[docker run]",
            "content": "docker run -d -p 8080:80 --name web nginx",
            "displayContent": "# 실행[docker run]\n# -d 백그라운드, -p 호스트:컨테이너 포트\ndocker run -d -p 8080:80 --name web nginx"
          },
          {
            "id": "language-docker-p01-part-2",
            "title": "목록[docker ps]",
            "content": "docker ps\ndocker ps -a",
            "displayContent": "# 목록[docker ps]\ndocker ps\ndocker ps -a"
          },
          {
            "id": "language-docker-p01-part-3",
            "title": "중지·시작·재시작[stop start restart]",
            "content": "docker stop web\ndocker start web\ndocker restart web",
            "displayContent": "# 중지·시작·재시작[stop start restart]\ndocker stop web\ndocker start web\ndocker restart web"
          },
          {
            "id": "language-docker-p01-part-4",
            "title": "삭제[docker rm]",
            "content": "docker rm web\ndocker rm -f web",
            "displayContent": "# 삭제[docker rm]\n# 중지된 컨테이너만 삭제 가능 (-f 강제)\ndocker rm web\ndocker rm -f web"
          },
          {
            "id": "language-docker-p01-part-5",
            "title": "이미지 받기[docker pull]",
            "content": "docker pull nginx\ndocker pull nginx:1.27",
            "displayContent": "# 이미지 받기[docker pull]\ndocker pull nginx\ndocker pull nginx:1.27"
          },
          {
            "id": "language-docker-p01-part-6",
            "title": "이미지 목록[docker images]",
            "content": "docker images",
            "displayContent": "# 이미지 목록[docker images]\ndocker images"
          },
          {
            "id": "language-docker-p01-part-7",
            "title": "이미지 삭제[docker rmi]",
            "content": "docker rmi nginx\ndocker rmi nginx:1.27",
            "displayContent": "# 이미지 삭제[docker rmi]\ndocker rmi nginx\ndocker rmi nginx:1.27"
          },
          {
            "id": "language-docker-p01-part-8",
            "title": "이미지 빌드[docker build]",
            "content": "docker build -t my-app:1.0 .",
            "displayContent": "# 이미지 빌드[docker build]\n# -t 태그, . 는 Dockerfile 있는 현재 디렉터리\ndocker build -t my-app:1.0 ."
          }
        ]
      },
      {
        "id": "language-docker-p02",
        "title": "P02.접속-볼륨-네트워크-compose",
        "fileName": "P02.접속-볼륨-네트워크-compose.yaml",
        "sourcePath": "assets/raw/syntax/docker/P02.접속-볼륨-네트워크-compose.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-docker-p02-part-1",
            "title": "접속[docker exec]",
            "content": "docker exec -it web bash",
            "displayContent": "# 접속[docker exec]\n# -it 대화형 터미널\ndocker exec -it web bash"
          },
          {
            "id": "language-docker-p02-part-2",
            "title": "로그 따라보기[docker logs]",
            "content": "docker logs -f web",
            "displayContent": "# 로그 따라보기[docker logs]\ndocker logs -f web"
          },
          {
            "id": "language-docker-p02-part-3",
            "title": "볼륨 마운트[-v]",
            "content": "docker run -d -v /data/html:/usr/share/nginx/html --name web nginx",
            "displayContent": "# 볼륨 마운트[-v]\n# 호스트 경로:컨테이너 경로\ndocker run -d -v /data/html:/usr/share/nginx/html --name web nginx"
          },
          {
            "id": "language-docker-p02-part-4",
            "title": "볼륨 관리[volume]",
            "content": "docker volume create app-data\ndocker volume ls",
            "displayContent": "# 볼륨 관리[volume]\ndocker volume create app-data\ndocker volume ls"
          },
          {
            "id": "language-docker-p02-part-5",
            "title": "네트워크[network]",
            "content": "docker network ls\ndocker network create app-net",
            "displayContent": "# 네트워크[network]\ndocker network ls\ndocker network create app-net"
          },
          {
            "id": "language-docker-p02-part-6",
            "title": "네트워크 연결[--network]",
            "content": "docker run -d --network app-net --name web nginx",
            "displayContent": "# 네트워크 연결[--network]\ndocker run -d --network app-net --name web nginx"
          },
          {
            "id": "language-docker-p02-part-7",
            "title": "Compose 기동[compose up]",
            "content": "docker compose up -d",
            "displayContent": "# Compose 기동[compose up]\ndocker compose up -d"
          },
          {
            "id": "language-docker-p02-part-8",
            "title": "Compose 종료·로그[compose down logs]",
            "content": "docker compose down\ndocker compose logs -f",
            "displayContent": "# Compose 종료·로그[compose down logs]\ndocker compose down\ndocker compose logs -f"
          },
          {
            "id": "language-docker-p02-part-9",
            "title": "상세 정보[docker inspect]",
            "content": "docker inspect web",
            "displayContent": "# 상세 정보[docker inspect]\ndocker inspect web"
          },
          {
            "id": "language-docker-p02-part-10",
            "title": "자원 사용[docker stats]",
            "content": "docker stats",
            "displayContent": "# 자원 사용[docker stats]\ndocker stats"
          },
          {
            "id": "language-docker-p02-part-11",
            "title": "디스크·정리[system df prune]",
            "content": "docker system df\ndocker system prune",
            "displayContent": "# 디스크·정리[system df prune]\ndocker system df\ndocker system prune"
          }
        ]
      }
    ]
  },
  {
    "id": "excel",
    "label": "Excel",
    "folderName": "excel",
    "lessons": [
      {
        "id": "language-excel-p01",
        "title": "P01.조회-조건-함수",
        "fileName": "P01.조회-조건-함수.yaml",
        "sourcePath": "assets/raw/syntax/excel/P01.조회-조건-함수.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-excel-p01-part-1",
            "title": "표로 만들기[Ctrl+T]",
            "content": "Ctrl+T",
            "displayContent": "# 표로 만들기[Ctrl+T]\n# 데이터 범위를 선택한 뒤 Ctrl+T → Excel 표[Table]가 된다\n# 표 이름 예: 사원목록 → 구조화 참조[_사원목록[성명]]를 쓸 수 있다\nCtrl+T"
          },
          {
            "id": "language-excel-p01-part-2",
            "title": "MATCH - 위치 찾기[match]",
            "content": "=MATCH(B7, A2:A100, 0)",
            "displayContent": "# MATCH - 위치 찾기[match]\n# =MATCH(찾을값, 찾을범위, 0)\n# 0 = 완전 일치. \"몇 번째 행/열인지\" 숫자를 돌려준다\n=MATCH(B7, A2:A100, 0)"
          },
          {
            "id": "language-excel-p01-part-3",
            "title": "INDEX - 값 꺼내기[index]",
            "content": "=INDEX(C2:C100, 3)",
            "displayContent": "# INDEX - 값 꺼내기[index]\n# =INDEX(꺼낼범위, 행번호, [열번호])\n# 지정한 행·열 위치의 값을 가져온다. 한 열이면 열번호는 생략 가능\n=INDEX(C2:C100, 3)"
          },
          {
            "id": "language-excel-p01-part-4",
            "title": "INDEX+MATCH 조합[vlookup 대체]",
            "content": "=INDEX(사원목록[성명], MATCH(B7, 사원목록[사원ID], 0))",
            "displayContent": "# INDEX+MATCH 조합[vlookup 대체]\n# MATCH로 위치를 찾고, INDEX로 그 위치의 값을 꺼낸다\n# 표 열: 사원목록[사원ID], 사원목록[성명]\n=INDEX(사원목록[성명], MATCH(B7, 사원목록[사원ID], 0))"
          },
          {
            "id": "language-excel-p01-part-5",
            "title": "COUNTIF - 개수 세기[countif]",
            "content": "=COUNTIF(D4:F4, \"●\")",
            "displayContent": "# COUNTIF - 개수 세기[countif]\n# =COUNTIF(범위, 조건)\n# 범위 안에서 조건과 같은 칸이 몇 개인지 센다\n=COUNTIF(D4:F4, \"●\")"
          },
          {
            "id": "language-excel-p01-part-6",
            "title": "IF+COUNTIF - 하나라도 있으면[if countif]",
            "content": "=IF(COUNTIF(D4:F4, \"●\") > 0, \"●\", \"\")",
            "displayContent": "# IF+COUNTIF - 하나라도 있으면[if countif]\n# D4:F4에 ●이 1개 이상이면 ●, 없으면 빈칸\n=IF(COUNTIF(D4:F4, \"●\") > 0, \"●\", \"\")"
          },
          {
            "id": "language-excel-p01-part-7",
            "title": "IF+COUNTIF 두 기호[● 또는 ※]",
            "content": "=IF(COUNTIF(D4:F4, \"●\") + COUNTIF(D4:F4, \"※\") > 0, \"●\", \"\")",
            "displayContent": "# IF+COUNTIF 두 기호[● 또는 ※]\n# ● 또는 ※가 하나라도 있으면 ● 표시\n=IF(COUNTIF(D4:F4, \"●\") + COUNTIF(D4:F4, \"※\") > 0, \"●\", \"\")"
          },
          {
            "id": "language-excel-p01-part-8",
            "title": "COUNTIF 배열 - 기호 추가 쉽게[array]",
            "content": "=IF(SUM(COUNTIF(D4:F4, {\"●\", \"※\"})) > 0, \"●\", \"\")",
            "displayContent": "# COUNTIF 배열 - 기호 추가 쉽게[array]\n# {} 안에 기호만 더하면 유지보수가 쉽다\n=IF(SUM(COUNTIF(D4:F4, {\"●\", \"※\"})) > 0, \"●\", \"\")"
          }
        ]
      },
      {
        "id": "language-excel-p02",
        "title": "P02.조인-조회",
        "fileName": "P02.조인-조회.yaml",
        "sourcePath": "assets/raw/syntax/excel/P02.조인-조회.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-excel-p02-part-1",
            "title": "XLOOKUP - 부서명 붙이기[left join]",
            "content": "=XLOOKUP(B2, 부서목록[부서ID], 부서목록[부서명], \"\")",
            "displayContent": "# XLOOKUP - 부서명 붙이기[left join]\n# =XLOOKUP(찾을값, 찾을범위, 반환범위, [없으면값])\n# SQL LEFT JOIN처럼 없으면 빈칸(또는 지정값)\n=XLOOKUP(B2, 부서목록[부서ID], 부서목록[부서명], \"\")"
          },
          {
            "id": "language-excel-p02-part-2",
            "title": "IFERROR+VLOOKUP[left join]",
            "content": "=IFERROR(VLOOKUP(B2, 부서목록!A:B, 2, FALSE), \"\")",
            "displayContent": "# IFERROR+VLOOKUP[left join]\n# VLOOKUP 실패(N/A)를 빈칸으로 — LEFT JOIN과 같은 느낌\n=IFERROR(VLOOKUP(B2, 부서목록!A:B, 2, FALSE), \"\")"
          },
          {
            "id": "language-excel-p02-part-3",
            "title": "복합키 헬퍼[composite key]",
            "content": "=A2&B2",
            "displayContent": "# 복합키 헬퍼[composite key]\n# 두 열을 이어 하나의 키로 만든다 (조회 보조열)\n=A2&B2"
          }
        ]
      }
    ]
  },
  {
    "id": "git",
    "label": "Git",
    "folderName": "git",
    "lessons": [
      {
        "id": "language-git-p01",
        "title": "P01.기본-흐름",
        "fileName": "P01.기본-흐름.yaml",
        "sourcePath": "assets/raw/syntax/git/P01.기본-흐름.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p01-part-1",
            "title": "깃 상태 확인[git status]",
            "content": "git status",
            "displayContent": "# 깃 상태 확인[git status]\ngit status\n# 결과: 현재 브랜치와 변경 파일 목록 확인"
          },
          {
            "id": "language-git-p01-part-2",
            "title": "차이 확인[git diff]",
            "content": "git diff\ngit diff --staged",
            "displayContent": "# 차이 확인[git diff]\ngit diff\ngit diff --staged\n# 결과: 작업 트리와 스테이징 차이 확인"
          },
          {
            "id": "language-git-p01-part-3",
            "title": "스테이징[git add]",
            "content": "git add src/app.ts\ngit add .",
            "displayContent": "# 스테이징[git add]\ngit add src/app.ts\ngit add .\n# 결과: 지정 파일 또는 전체 변경을 스테이징"
          },
          {
            "id": "language-git-p01-part-4",
            "title": "커밋[git commit]",
            "content": "git commit -m \"fix: handle null user response\"",
            "displayContent": "# 커밋[git commit]\ngit commit -m \"fix: handle null user response\"\n# 결과: 변경 이력을 메시지와 함께 저장"
          },
          {
            "id": "language-git-p01-part-5",
            "title": "푸시[git push]",
            "content": "git push origin feature/login",
            "displayContent": "# 푸시[git push]\ngit push origin feature/login\n# 결과: 현재 브랜치 변경을 원격 저장소에 반영"
          },
          {
            "id": "language-git-p01-part-6",
            "title": "풀[git pull]",
            "content": "git pull origin main",
            "displayContent": "# 풀[git pull]\ngit pull origin main\n# 결과: 원격 main 최신 이력을 가져와 현재 브랜치에 반영"
          },
          {
            "id": "language-git-p01-part-7",
            "title": "브랜치 생성[git branch]",
            "content": "git branch feature/profile-page\ngit branch",
            "displayContent": "# 브랜치 생성[git branch]\ngit branch feature/profile-page\ngit branch\n# 결과: 새 브랜치 생성 후 목록 확인"
          },
          {
            "id": "language-git-p01-part-8",
            "title": "체크아웃[git checkout]",
            "content": "git checkout main",
            "displayContent": "# 체크아웃[git checkout]\ngit checkout main\n# 결과: main 브랜치로 이동"
          },
          {
            "id": "language-git-p01-part-9",
            "title": "스위치 생성[git checkout -b]",
            "content": "git checkout -b feature/cart",
            "displayContent": "# 스위치 생성[git checkout -b]\ngit checkout -b feature/cart\n# 결과: 새 브랜치를 만들고 즉시 이동"
          },
          {
            "id": "language-git-p01-part-10",
            "title": "스위치[git switch]",
            "content": "git switch main\ngit switch -c feature/search",
            "displayContent": "# 스위치[git switch]\ngit switch main\ngit switch -c feature/search\n# 결과: 브랜치 이동 또는 생성 후 이동"
          },
          {
            "id": "language-git-p01-part-11",
            "title": "머지[git merge]",
            "content": "git merge feature/cart",
            "displayContent": "# 머지[git merge]\ngit merge feature/cart\n# 결과: feature/cart 내용을 현재 브랜치에 병합"
          },
          {
            "id": "language-git-p01-part-12",
            "title": "리베이스[git rebase]",
            "content": "git rebase main",
            "displayContent": "# 리베이스[git rebase]\ngit rebase main\n# 결과: 현재 커밋을 최신 main 위로 다시 정렬"
          },
          {
            "id": "language-git-p01-part-13",
            "title": "충돌 해결[merge conflict resolution]",
            "content": "git status\ngit add src/app.ts\ngit commit -m \"fix: resolve merge conflict\"",
            "displayContent": "# 충돌 해결[merge conflict resolution]\ngit status\ngit add src/app.ts\ngit commit -m \"fix: resolve merge conflict\"\n# 결과: 충돌 파일 수정 후 병합 마무리"
          },
          {
            "id": "language-git-p01-part-14",
            "title": "리셋[git reset]",
            "content": "git reset --soft HEAD~1",
            "displayContent": "# 리셋[git reset]\ngit reset --soft HEAD~1\n# 결과: 마지막 커밋만 취소하고 변경 내용은 유지"
          },
          {
            "id": "language-git-p01-part-15",
            "title": "리버트[git revert]",
            "content": "git revert abc1234",
            "displayContent": "# 리버트[git revert]\ngit revert abc1234\n# 결과: 특정 커밋을 되돌리는 새 커밋 생성"
          },
          {
            "id": "language-git-p01-part-16",
            "title": "체리픽[git cherry-pick]",
            "content": "git cherry-pick abc1234",
            "displayContent": "# 체리픽[git cherry-pick]\ngit cherry-pick abc1234\n# 결과: 필요한 커밋 하나만 현재 브랜치에 가져옴"
          },
          {
            "id": "language-git-p01-part-17",
            "title": "작업 시작 흐름[status -> pull -> switch]",
            "content": "git status\ngit pull origin main\ngit switch -c feature/x",
            "displayContent": "# 작업 시작 흐름[status -> pull -> switch]\ngit status\ngit pull origin main\ngit switch -c feature/x\n# 결과: 작업 시작 전에 최신 상태를 맞추고 새 브랜치로 이동"
          },
          {
            "id": "language-git-p01-part-18",
            "title": "작업 저장 흐름[diff -> add -> commit]",
            "content": "git diff\ngit add .\ngit commit -m \"feat: update dashboard widgets\"",
            "displayContent": "# 작업 저장 흐름[diff -> add -> commit]\ngit diff\ngit add .\ngit commit -m \"feat: update dashboard widgets\"\n# 결과: 변경 검토 후 저장"
          },
          {
            "id": "language-git-p01-part-19",
            "title": "반영 흐름[switch -> pull -> merge]",
            "content": "git switch main\ngit pull origin main\ngit merge feature/x",
            "displayContent": "# 반영 흐름[switch -> pull -> merge]\ngit switch main\ngit pull origin main\ngit merge feature/x\n# 결과: 메인 브랜치에 기능 브랜치 내용을 반영"
          }
        ]
      },
      {
        "id": "language-git-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/git/P02.실무-패턴.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p02-part-1",
            "title": "기능 추가 커밋[feat]",
            "content": "git commit -m \"feat(auth): add social login\"",
            "displayContent": "# 기능 추가 커밋[feat]\ngit commit -m \"feat(auth): add social login\"\n# 결과: 새 기능 추가 이력을 남김"
          },
          {
            "id": "language-git-p02-part-2",
            "title": "버그 수정 커밋[fix]",
            "content": "git commit -m \"fix(api): handle empty response\"",
            "displayContent": "# 버그 수정 커밋[fix]\ngit commit -m \"fix(api): handle empty response\"\n# 결과: 버그 수정 이력을 남김"
          },
          {
            "id": "language-git-p02-part-3",
            "title": "문서 수정 커밋[docs]",
            "content": "git commit -m \"docs: update setup guide\"",
            "displayContent": "# 문서 수정 커밋[docs]\ngit commit -m \"docs: update setup guide\"\n# 결과: 문서 변경 이력을 남김"
          },
          {
            "id": "language-git-p02-part-4",
            "title": "리팩터링 커밋[refactor]",
            "content": "git commit -m \"refactor(ui): simplify modal props\"",
            "displayContent": "# 리팩터링 커밋[refactor]\ngit commit -m \"refactor(ui): simplify modal props\"\n# 결과: 동작 변화 없는 구조 개선 이력을 남김"
          },
          {
            "id": "language-git-p02-part-5",
            "title": "잡무 커밋[chore]",
            "content": "git commit -m \"chore: update eslint config\"",
            "displayContent": "# 잡무 커밋[chore]\ngit commit -m \"chore: update eslint config\"\n# 결과: 설정 또는 의존성 변경 이력을 남김"
          },
          {
            "id": "language-git-p02-part-6",
            "title": "스타일 커밋[style]",
            "content": "git commit -m \"style: lint code\"",
            "displayContent": "# 스타일 커밋[style]\ngit commit -m \"style: lint code\"\n# 결과: 포맷 또는 스타일 정리 이력을 남김"
          },
          {
            "id": "language-git-p02-part-7",
            "title": "기능 브랜치[feature branch]",
            "content": "git switch -c feature/profile-page",
            "displayContent": "# 기능 브랜치[feature branch]\ngit switch -c feature/profile-page\n# 결과: 기능 개발용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-8",
            "title": "핫픽스 브랜치[hotfix branch]",
            "content": "git switch -c hotfix/login-error",
            "displayContent": "# 핫픽스 브랜치[hotfix branch]\ngit switch -c hotfix/login-error\n# 결과: 긴급 수정용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-9",
            "title": "버그픽스 브랜치[bugfix branch]",
            "content": "git switch -c bugfix/cart-total",
            "displayContent": "# 버그픽스 브랜치[bugfix branch]\ngit switch -c bugfix/cart-total\n# 결과: 버그 수정용 브랜치 생성"
          },
          {
            "id": "language-git-p02-part-10",
            "title": "페치[git fetch]",
            "content": "git fetch origin",
            "displayContent": "# 페치[git fetch]\ngit fetch origin\n# 결과: 원격 저장소 최신 이력을 가져옴"
          },
          {
            "id": "language-git-p02-part-11",
            "title": "프룬[git prune]",
            "content": "git prune --dry-run",
            "displayContent": "# 프룬[git prune]\ngit prune --dry-run\n# 결과: 어떤 loose object 가 정리 대상인지 미리 확인"
          },
          {
            "id": "language-git-p02-part-12",
            "title": "원격 삭제 브랜치 정리[git fetch --prune]",
            "content": "git fetch --prune origin",
            "displayContent": "# 원격 삭제 브랜치 정리[git fetch --prune]\ngit fetch --prune origin\n# 결과: 원격에서 이미 삭제된 origin/* 추적 브랜치를 정리"
          },
          {
            "id": "language-git-p02-part-13",
            "title": "원격 추적 브랜치 정리[git remote prune]",
            "content": "git remote prune origin",
            "displayContent": "# 원격 추적 브랜치 정리[git remote prune]\ngit remote prune origin\n# 결과: 더 이상 없는 원격 브랜치 참조를 한 번에 정리"
          },
          {
            "id": "language-git-p02-part-14",
            "title": "로그 비교[git log --oneline --graph]",
            "content": "git log --oneline --graph --decorate",
            "displayContent": "# 로그 비교[git log --oneline --graph]\ngit log --oneline --graph --decorate\n# 결과: 브랜치 이력 구조를 한눈에 확인"
          },
          {
            "id": "language-git-p02-part-15",
            "title": "이력 추적[git blame]",
            "content": "git blame src/app.ts",
            "displayContent": "# 이력 추적[git blame]\ngit blame src/app.ts\n# 결과: 각 줄의 마지막 수정 커밋과 작성자 확인"
          },
          {
            "id": "language-git-p02-part-16",
            "title": "커밋 보기[git show]",
            "content": "git show HEAD~1",
            "displayContent": "# 커밋 보기[git show]\ngit show HEAD~1\n# 결과: 바로 전 커밋의 diff와 메타데이터 확인"
          },
          {
            "id": "language-git-p02-part-17",
            "title": "스태시[git stash]",
            "content": "git stash",
            "displayContent": "# 스태시[git stash]\ngit stash\n# 결과: 현재 변경을 임시로 치움"
          },
          {
            "id": "language-git-p02-part-18",
            "title": "스태시 목록[git stash list]",
            "content": "git stash list",
            "displayContent": "# 스태시 목록[git stash list]\ngit stash list\n# 결과: 임시 저장한 항목 목록 확인"
          },
          {
            "id": "language-git-p02-part-19",
            "title": "스태시 복원[git stash pop]",
            "content": "git stash pop",
            "displayContent": "# 스태시 복원[git stash pop]\ngit stash pop\n# 결과: 마지막 스태시를 복원하고 목록에서 제거"
          }
        ]
      },
      {
        "id": "language-git-temp",
        "title": "P03.커밋-메시지-규칙",
        "fileName": "P03.커밋-메시지-규칙.yaml",
        "sourcePath": "assets/raw/syntax/git/P03.커밋-메시지-규칙.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-temp-part-1",
            "title": "기본 구조[conventional commits]",
            "content": "git commit -m \"feat(auth): add oauth login\"",
            "displayContent": "# 기본 구조[conventional commits]\n# <type>(<scope>): <subject>\n#\n# <body>\n#\n# <footer>\ngit commit -m \"feat(auth): add oauth login\""
          },
          {
            "id": "language-git-temp-part-2",
            "title": "feat - 새 기능[feat]",
            "content": "git commit -m \"feat(player): add progress bar to music player\"",
            "displayContent": "# feat - 새 기능[feat]\ngit commit -m \"feat(player): add progress bar to music player\""
          },
          {
            "id": "language-git-temp-part-3",
            "title": "fix - 버그 수정[fix]",
            "content": "git commit -m \"fix(api): handle 404 error gracefully\"",
            "displayContent": "# fix - 버그 수정[fix]\ngit commit -m \"fix(api): handle 404 error gracefully\""
          },
          {
            "id": "language-git-temp-part-4",
            "title": "docs - 문서[docs]",
            "content": "git commit -m \"docs(readme): add setup guide for devs\"",
            "displayContent": "# docs - 문서[docs]\ngit commit -m \"docs(readme): add setup guide for devs\""
          },
          {
            "id": "language-git-temp-part-5",
            "title": "style - 포맷만[style]",
            "content": "git commit -m \"style: apply prettier formatting\"",
            "displayContent": "# style - 포맷만[style] — 동작 변화 없음\ngit commit -m \"style: apply prettier formatting\""
          },
          {
            "id": "language-git-temp-part-6",
            "title": "refactor - 구조 개선[refactor]",
            "content": "git commit -m \"refactor(auth): extract token logic into utils\"",
            "displayContent": "# refactor - 구조 개선[refactor] — 동작 변화 없음\ngit commit -m \"refactor(auth): extract token logic into utils\""
          },
          {
            "id": "language-git-temp-part-7",
            "title": "perf - 성능[perf]",
            "content": "git commit -m \"perf(db): optimize query speed\"",
            "displayContent": "# perf - 성능[perf]\ngit commit -m \"perf(db): optimize query speed\""
          },
          {
            "id": "language-git-temp-part-8",
            "title": "test - 테스트[test]",
            "content": "git commit -m \"test: add unit tests for utils\"",
            "displayContent": "# test - 테스트[test]\ngit commit -m \"test: add unit tests for utils\""
          },
          {
            "id": "language-git-temp-part-9",
            "title": "chore - 잡무[chore]",
            "content": "git commit -m \"chore(deps): bump react to v18.2.0\"",
            "displayContent": "# chore - 잡무[chore] — 빌드·설정·의존성\ngit commit -m \"chore(deps): bump react to v18.2.0\""
          },
          {
            "id": "language-git-temp-part-10",
            "title": "build - 빌드[build]",
            "content": "git commit -m \"build: update vite build script\"",
            "displayContent": "# build - 빌드[build]\ngit commit -m \"build: update vite build script\""
          },
          {
            "id": "language-git-temp-part-11",
            "title": "ci - CI/CD[ci]",
            "content": "git commit -m \"ci: add build cache to github actions\"",
            "displayContent": "# ci - CI/CD[ci]\ngit commit -m \"ci: add build cache to github actions\""
          },
          {
            "id": "language-git-temp-part-12",
            "title": "revert - 되돌림[revert]",
            "content": "git commit -m \"revert: revert \\\"feat: dark mode support\\\"\"",
            "displayContent": "# revert - 되돌림[revert]\ngit commit -m \"revert: revert \\\"feat: dark mode support\\\"\""
          },
          {
            "id": "language-git-temp-part-13",
            "title": "body로 이유 적기[commit body]",
            "content": "git commit -m \"$(cat <<'EOF'\nfix(api): handle null user response\n\nUpstream sometimes returns null user; guard before access.\nEOF\n)\"",
            "displayContent": "# body로 이유 적기[commit body]\n# subject는 무엇을, body는 왜를 적는다\ngit commit -m \"$(cat <<'EOF'\nfix(api): handle null user response\n\nUpstream sometimes returns null user; guard before access.\nEOF\n)\""
          },
          {
            "id": "language-git-temp-part-14",
            "title": "footer로 이슈 연결[closes]",
            "content": "git commit -m \"$(cat <<'EOF'\nfeat(auth): add oauth login\n\nCloses #123\nEOF\n)\"",
            "displayContent": "# footer로 이슈 연결[closes]\ngit commit -m \"$(cat <<'EOF'\nfeat(auth): add oauth login\n\nCloses #123\nEOF\n)\""
          },
          {
            "id": "language-git-temp-part-15",
            "title": "커밋 템플릿 설정[commit.template]",
            "content": "git config --global commit.template ~/.gitmessage.txt",
            "displayContent": "# 커밋 템플릿 설정[commit.template]\n# .gitmessage.txt를 기본 메시지로 쓴다\ngit config --global commit.template ~/.gitmessage.txt"
          }
        ]
      },
      {
        "id": "language-git-p04",
        "title": "P04.복구-정리",
        "fileName": "P04.복구-정리.yaml",
        "sourcePath": "assets/raw/syntax/git/P04.복구-정리.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p04-part-1",
            "title": "전역 설정[git config --global]",
            "content": "git config --global user.name \"kim\"\ngit config --global user.email \"kim@example.com\"",
            "displayContent": "# 전역 설정[git config --global]\ngit config --global user.name \"kim\"\ngit config --global user.email \"kim@example.com\"\n# 결과: 커밋에 기록될 이름과 이메일 설정"
          },
          {
            "id": "language-git-p04-part-2",
            "title": "저장소 시작[git init / clone]",
            "content": "git init\ngit clone https://github.com/user/repo.git",
            "displayContent": "# 저장소 시작[git init / clone]\ngit init\ngit clone https://github.com/user/repo.git\n# 결과: 새 저장소 생성 또는 원격 저장소 복제"
          },
          {
            "id": "language-git-p04-part-3",
            "title": "마지막 커밋에 덧붙이기[git commit --amend]",
            "content": "git commit --amend --no-edit\n\ngit commit --amend",
            "displayContent": "# 마지막 커밋에 덧붙이기[git commit --amend]\ngit commit --amend --no-edit\n# 결과: 메시지 수정 없이 방금 변경분을 마지막 커밋에 합침\n\ngit commit --amend\n# 결과: 마지막 커밋 메시지를 수정"
          },
          {
            "id": "language-git-p04-part-4",
            "title": "커밋 취소 - 변경 유지[git reset HEAD~1]",
            "content": "git reset HEAD~1\n\ngit reset HEAD~3",
            "displayContent": "# 커밋 취소 - 변경 유지[git reset HEAD~1]\ngit reset HEAD~1\n# 결과: 최근 커밋 1개를 취소하고 변경 내용은 남김\n\ngit reset HEAD~3\n# 결과: 최근 커밋 3개를 취소하고 변경 내용은 남김"
          },
          {
            "id": "language-git-p04-part-5",
            "title": "커밋 취소 - 변경 폐기[git reset --hard]",
            "content": "git reset HEAD~1 --hard",
            "displayContent": "# 커밋 취소 - 변경 폐기[git reset --hard]\ngit reset HEAD~1 --hard\n# 결과: 최근 커밋과 변경 내용을 모두 버림 (복구 어려움, 주의)"
          },
          {
            "id": "language-git-p04-part-6",
            "title": "원격 상태로 초기화[reset --hard origin]",
            "content": "git fetch origin\ngit reset --hard origin/main",
            "displayContent": "# 원격 상태로 초기화[reset --hard origin]\ngit fetch origin\ngit reset --hard origin/main\n# 결과: 로컬 브랜치를 원격 main과 완전히 동일하게 맞춤"
          },
          {
            "id": "language-git-p04-part-7",
            "title": "브랜치 이름 변경[git branch -m]",
            "content": "git branch -m master main",
            "displayContent": "# 브랜치 이름 변경[git branch -m]\ngit branch -m master main\n# 결과: 로컬 master 브랜치를 main으로 이름 변경"
          },
          {
            "id": "language-git-p04-part-8",
            "title": "로컬 브랜치 강제 삭제[git branch -D]",
            "content": "git branch -D feature/login",
            "displayContent": "# 로컬 브랜치 강제 삭제[git branch -D]\ngit branch -D feature/login\n# 결과: 병합 여부와 상관없이 로컬 브랜치 삭제"
          },
          {
            "id": "language-git-p04-part-9",
            "title": "병합된 브랜치 일괄 삭제[branch --merged]",
            "content": "git branch --merged | grep -v \"\\*\" | xargs -n 1 git branch -d",
            "displayContent": "# 병합된 브랜치 일괄 삭제[branch --merged]\ngit branch --merged | grep -v \"\\*\" | xargs -n 1 git branch -d\n# 결과: 현재 브랜치에 이미 병합된 로컬 브랜치를 한 번에 정리"
          },
          {
            "id": "language-git-p04-part-10",
            "title": "원격 브랜치 삭제[git push -d]",
            "content": "git push origin -d feature/login",
            "displayContent": "# 원격 브랜치 삭제[git push -d]\ngit push origin -d feature/login\n# 결과: 원격 저장소의 feature/login 브랜치 삭제"
          },
          {
            "id": "language-git-p04-part-11",
            "title": "대소문자 구분[core.ignorecase]",
            "content": "git config core.ignorecase false",
            "displayContent": "# 대소문자 구분[core.ignorecase]\ngit config core.ignorecase false\n# 결과: 파일명 대소문자 변경을 git이 추적하도록 설정"
          },
          {
            "id": "language-git-p04-part-12",
            "title": "커밋 스코프 예시[commit scope]",
            "content": "git commit -m \"fix(typo): enought -> enough\"\ngit commit -m \"docs(readme): added demo image\"\ngit commit -m \"feat(i18n): add Indonesian translations\"\ngit commit -m \"chore(deps): update dependency typescript to v5.8.2\"",
            "displayContent": "# 커밋 스코프 예시[commit scope]\n# type(scope): subject 형태로 변경 범위를 명시한다\ngit commit -m \"fix(typo): enought -> enough\"\ngit commit -m \"docs(readme): added demo image\"\ngit commit -m \"feat(i18n): add Indonesian translations\"\ngit commit -m \"chore(deps): update dependency typescript to v5.8.2\"\n# 결과: 스코프로 변경 위치가 한눈에 드러나는 커밋 이력"
          }
        ]
      },
      {
        "id": "language-git-p05",
        "title": "P05.실무-시나리오",
        "fileName": "P05.실무-시나리오.yaml",
        "sourcePath": "assets/raw/syntax/git/P05.실무-시나리오.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-git-p05-part-1",
            "title": "페치로 최신 맞추기[fetch]",
            "content": "git fetch origin\ngit log --oneline HEAD..origin/main",
            "displayContent": "# 페치로 최신 맞추기[fetch]\n# 원격 이력만 가져오고 작업 트리는 건드리지 않는다\ngit fetch origin\ngit log --oneline HEAD..origin/main"
          },
          {
            "id": "language-git-p05-part-2",
            "title": "브랜치 만들고 main에 머지[branch + merge]",
            "content": "git switch main\ngit pull origin main\ngit switch -c feature/login\ngit switch main\ngit merge feature/login\ngit push origin main",
            "displayContent": "# 브랜치 만들고 main에 머지[branch + merge]\ngit switch main\ngit pull origin main\ngit switch -c feature/login\n# ... 작업 후 ...\ngit switch main\ngit merge feature/login\ngit push origin main"
          },
          {
            "id": "language-git-p05-part-3",
            "title": "체리픽[cherry-pick]",
            "content": "git switch main\ngit cherry-pick abc1234\ngit push origin main",
            "displayContent": "# 체리픽[cherry-pick]\n# 다른 브랜치의 커밋 하나만 현재 브랜치로 가져온다\ngit switch main\ngit cherry-pick abc1234\ngit push origin main"
          },
          {
            "id": "language-git-p05-part-4",
            "title": "리버트[revert]",
            "content": "git revert abc1234\ngit push origin main",
            "displayContent": "# 리버트[revert]\n# 이미 공유된 커밋은 reset 대신 되돌리는 새 커밋을 만든다\ngit revert abc1234\ngit push origin main"
          },
          {
            "id": "language-git-p05-part-5",
            "title": "브랜치 삭제[delete branch]",
            "content": "git switch main\ngit branch -d feature/login\ngit push origin -d feature/login",
            "displayContent": "# 브랜치 삭제[delete branch]\ngit switch main\ngit branch -d feature/login\ngit push origin -d feature/login"
          },
          {
            "id": "language-git-p05-part-6",
            "title": "커밋 스쿼시[squash]",
            "content": "git reset --soft HEAD~3\ngit commit -m \"feat(auth): add oauth login\"\ngit push --force-with-lease origin feature/login",
            "displayContent": "# 커밋 스쿼시[squash]\n# 최근 커밋 3개를 스테이징에 풀어 한 커밋으로 다시 묶는다\ngit reset --soft HEAD~3\ngit commit -m \"feat(auth): add oauth login\"\ngit push --force-with-lease origin feature/login"
          },
          {
            "id": "language-git-p05-part-7",
            "title": "원격 삭제 브랜치 프룬[prune]",
            "content": "git fetch --prune origin\ngit remote prune origin",
            "displayContent": "# 원격 삭제 브랜치 프룬[prune]\n# 원격에서 지워진 origin/* 추적 브랜치를 로컬에서 정리한다\ngit fetch --prune origin\ngit remote prune origin"
          },
          {
            "id": "language-git-p05-part-8",
            "title": "커밋 후 푸시[commit + push]",
            "content": "git status\ngit add .\ngit commit -m \"fix(api): handle null response\"\ngit push -u origin HEAD",
            "displayContent": "# 커밋 후 푸시[commit + push]\ngit status\ngit add .\ngit commit -m \"fix(api): handle null response\"\ngit push -u origin HEAD"
          },
          {
            "id": "language-git-p05-part-9",
            "title": "원격 확인[remote -v / show]",
            "content": "git remote -v\ngit remote show origin",
            "displayContent": "# 원격 확인[remote -v / show]\ngit remote -v\ngit remote show origin"
          },
          {
            "id": "language-git-p05-part-10",
            "title": "오리진 URL 변경[remote set-url]",
            "content": "git remote -v\ngit remote set-url origin https://github.com/user/repo.git\ngit remote -v\ngit push -u origin main",
            "displayContent": "# 오리진 URL 변경[remote set-url]\ngit remote -v\ngit remote set-url origin https://github.com/user/repo.git\ngit remote -v\ngit push -u origin main"
          }
        ]
      }
    ]
  },
  {
    "id": "go",
    "label": "Go",
    "folderName": "go",
    "lessons": [
      {
        "id": "language-go-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/go/P01.기본-패턴.yaml",
        "language": "go",
        "parts": [
          {
            "id": "language-go-p01-part-1",
            "title": "변수 선언[:= / var]",
            "content": "userName := \"kim\"\nvar userAge int = 30\nfmt.Println(userName, userAge)",
            "displayContent": "// 변수 선언[:= / var]\n// := 는 함수 안에서 타입 추론으로 선언한다\nuserName := \"kim\"\nvar userAge int = 30\nfmt.Println(userName, userAge)\n// 결과: kim 30"
          },
          {
            "id": "language-go-p01-part-2",
            "title": "기본 타입[int float64 string bool]",
            "content": "var count int = 3\nvar ratio float64 = 1.5\nvar label string = \"go\"\nvar ok bool = true\nfmt.Println(count, ratio, label, ok)",
            "displayContent": "// 기본 타입[int float64 string bool]\nvar count int = 3\nvar ratio float64 = 1.5\nvar label string = \"go\"\nvar ok bool = true\nfmt.Println(count, ratio, label, ok)\n// 결과: 3 1.5 go true"
          },
          {
            "id": "language-go-p01-part-3",
            "title": "상수[const]",
            "content": "const serviceName = \"gmtl\"\nconst maxRetry = 3\nfmt.Println(serviceName, maxRetry)",
            "displayContent": "// 상수[const]\nconst serviceName = \"gmtl\"\nconst maxRetry = 3\nfmt.Println(serviceName, maxRetry)\n// 결과: gmtl 3"
          },
          {
            "id": "language-go-p01-part-4",
            "title": "이오타[iota]",
            "content": "const (\n\tStatusReady = iota\n\tStatusRunning\n\tStatusDone\n)\nfmt.Println(StatusReady, StatusRunning, StatusDone)",
            "displayContent": "// 이오타[iota] — const 블록에서 0부터 자동 증가\nconst (\n\tStatusReady = iota\n\tStatusRunning\n\tStatusDone\n)\nfmt.Println(StatusReady, StatusRunning, StatusDone)\n// 결과: 0 1 2"
          },
          {
            "id": "language-go-p01-part-5",
            "title": "조건문[if / else]",
            "content": "userAge := 30\nif userAge >= 20 {\n\tfmt.Println(\"adult\")\n} else {\n\tfmt.Println(\"minor\")\n}",
            "displayContent": "// 조건문[if / else]\nuserAge := 30\nif userAge >= 20 {\n\tfmt.Println(\"adult\")\n} else {\n\tfmt.Println(\"minor\")\n}\n// 결과: adult"
          },
          {
            "id": "language-go-p01-part-6",
            "title": "반복문[for]",
            "content": "count := 0\nfor count < 3 {\n\tcount++\n}\nfmt.Println(count)",
            "displayContent": "// 반복문[for] — Go에는 while이 없고 for만 쓴다\ncount := 0\nfor count < 3 {\n\tcount++\n}\nfmt.Println(count)\n// 결과: 3"
          },
          {
            "id": "language-go-p01-part-7",
            "title": "범위 순회[for range]",
            "content": "scoreList := []int{10, 20, 30}\nfor index, score := range scoreList {\n\tfmt.Println(index, score)\n}",
            "displayContent": "// 범위 순회[for range]\nscoreList := []int{10, 20, 30}\nfor index, score := range scoreList {\n\tfmt.Println(index, score)\n}\n// 결과: 0 10 / 1 20 / 2 30"
          },
          {
            "id": "language-go-p01-part-8",
            "title": "분기[switch]",
            "content": "role := \"admin\"\nswitch role {\ncase \"admin\":\n\tfmt.Println(\"full\")\ncase \"member\":\n\tfmt.Println(\"read\")\ndefault:\n\tfmt.Println(\"none\")\n}",
            "displayContent": "// 분기[switch]\nrole := \"admin\"\nswitch role {\ncase \"admin\":\n\tfmt.Println(\"full\")\ncase \"member\":\n\tfmt.Println(\"read\")\ndefault:\n\tfmt.Println(\"none\")\n}\n// 결과: full"
          },
          {
            "id": "language-go-p01-part-9",
            "title": "함수[func]",
            "content": "func add(numA int, numB int) int {\n\treturn numA + numB\n}\n\nfmt.Println(add(3, 4))",
            "displayContent": "// 함수[func] — 매개변수·반환 타입을 이름 뒤에 쓴다\nfunc add(numA int, numB int) int {\n\treturn numA + numB\n}\n\nfmt.Println(add(3, 4))\n// 결과: 7"
          },
          {
            "id": "language-go-p01-part-10",
            "title": "다중 반환[multiple return]",
            "content": "func divide(numA int, numB int) (int, bool) {\n\tif numB == 0 {\n\t\treturn 0, false\n\t}\n\treturn numA / numB, true\n}\n\nquotient, ok := divide(10, 2)\nfmt.Println(quotient, ok)",
            "displayContent": "// 다중 반환[multiple return]\nfunc divide(numA int, numB int) (int, bool) {\n\tif numB == 0 {\n\t\treturn 0, false\n\t}\n\treturn numA / numB, true\n}\n\nquotient, ok := divide(10, 2)\nfmt.Println(quotient, ok)\n// 결과: 5 true"
          },
          {
            "id": "language-go-p01-part-11",
            "title": "이름 있는 반환[named return]",
            "content": "func sumPair(numA int, numB int) (sum int) {\n\tsum = numA + numB\n\treturn\n}\n\nfmt.Println(sumPair(2, 3))",
            "displayContent": "// 이름 있는 반환[named return]\nfunc sumPair(numA int, numB int) (sum int) {\n\tsum = numA + numB\n\treturn\n}\n\nfmt.Println(sumPair(2, 3))\n// 결과: 5"
          },
          {
            "id": "language-go-p01-part-12",
            "title": "가변 인자[variadic ...]",
            "content": "func total(nums ...int) int {\n\tsum := 0\n\tfor _, n := range nums {\n\t\tsum += n\n\t}\n\treturn sum\n}\n\nfmt.Println(total(1, 2, 3))",
            "displayContent": "// 가변 인자[variadic ...]\nfunc total(nums ...int) int {\n\tsum := 0\n\tfor _, n := range nums {\n\t\tsum += n\n\t}\n\treturn sum\n}\n\nfmt.Println(total(1, 2, 3))\n// 결과: 6"
          },
          {
            "id": "language-go-p01-part-13",
            "title": "슬라이스[slice]",
            "content": "skills := []string{\"go\", \"sql\"}\nfmt.Println(skills[0], len(skills))",
            "displayContent": "// 슬라이스[slice]\nskills := []string{\"go\", \"sql\"}\nfmt.Println(skills[0], len(skills))\n// 결과: go 2"
          },
          {
            "id": "language-go-p01-part-14",
            "title": "슬라이스 추가[append]",
            "content": "valueList := []int{1, 2}\nvalueList = append(valueList, 3, 4)\nfmt.Println(valueList)",
            "displayContent": "// 슬라이스 추가[append]\nvalueList := []int{1, 2}\nvalueList = append(valueList, 3, 4)\nfmt.Println(valueList)\n// 결과: [1 2 3 4]"
          },
          {
            "id": "language-go-p01-part-15",
            "title": "맵[map]",
            "content": "userMap := map[string]string{\n\t\"name\": \"lee\",\n\t\"role\": \"admin\",\n}\nfmt.Println(userMap[\"name\"])",
            "displayContent": "// 맵[map]\nuserMap := map[string]string{\n\t\"name\": \"lee\",\n\t\"role\": \"admin\",\n}\nfmt.Println(userMap[\"name\"])\n// 결과: lee"
          },
          {
            "id": "language-go-p01-part-16",
            "title": "맵 존재 확인[comma ok]",
            "content": "roleMap := map[string]string{\"kim\": \"admin\"}\nroleValue, ok := roleMap[\"kim\"]\nfmt.Println(roleValue, ok)",
            "displayContent": "// 맵 존재 확인[comma ok]\nroleMap := map[string]string{\"kim\": \"admin\"}\nroleValue, ok := roleMap[\"kim\"]\nfmt.Println(roleValue, ok)\n// 결과: admin true"
          }
        ]
      },
      {
        "id": "language-go-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/go/P02.실무-패턴.yaml",
        "language": "go",
        "parts": [
          {
            "id": "language-go-p02-part-1",
            "title": "구조체[struct]",
            "content": "type User struct {\n\tName  string\n\tAge   int\n\tAdmin bool\n}\n\nuserItem := User{Name: \"park\", Age: 25, Admin: true}\nfmt.Println(userItem.Name, userItem.Admin)",
            "displayContent": "// 구조체[struct]\ntype User struct {\n\tName  string\n\tAge   int\n\tAdmin bool\n}\n\nuserItem := User{Name: \"park\", Age: 25, Admin: true}\nfmt.Println(userItem.Name, userItem.Admin)\n// 결과: park true"
          },
          {
            "id": "language-go-p02-part-2",
            "title": "메서드[pointer receiver]",
            "content": "type Counter struct {\n\tValue int\n}\n\nfunc (c *Counter) Inc() {\n\tc.Value++\n}\n\ncounter := &Counter{Value: 1}\ncounter.Inc()\nfmt.Println(counter.Value)",
            "displayContent": "// 메서드[pointer receiver] — 필드를 바꿀 때 포인터 리시버가 흔하다\ntype Counter struct {\n\tValue int\n}\n\nfunc (c *Counter) Inc() {\n\tc.Value++\n}\n\ncounter := &Counter{Value: 1}\ncounter.Inc()\nfmt.Println(counter.Value)\n// 결과: 2"
          },
          {
            "id": "language-go-p02-part-3",
            "title": "에러 생성[errors.New / fmt.Errorf]",
            "content": "import (\n\t\"errors\"\n\t\"fmt\"\n)\n\nerrA := errors.New(\"not found\")\nerrB := fmt.Errorf(\"user %d missing\", 7)\nfmt.Println(errA, errB)",
            "displayContent": "// 에러 생성[errors.New / fmt.Errorf]\nimport (\n\t\"errors\"\n\t\"fmt\"\n)\n\nerrA := errors.New(\"not found\")\nerrB := fmt.Errorf(\"user %d missing\", 7)\nfmt.Println(errA, errB)\n// 결과: not found user 7 missing"
          },
          {
            "id": "language-go-p02-part-4",
            "title": "에러 반환[error return]",
            "content": "func divide(numA int, numB int) (int, error) {\n\tif numB == 0 {\n\t\treturn 0, fmt.Errorf(\"0으로 나눌 수 없음\")\n\t}\n\treturn numA / numB, nil\n}\n\nquotient, err := divide(10, 2)\nfmt.Println(quotient, err)",
            "displayContent": "// 에러 반환[error return] — (값, error) 가 Go 관례\nfunc divide(numA int, numB int) (int, error) {\n\tif numB == 0 {\n\t\treturn 0, fmt.Errorf(\"0으로 나눌 수 없음\")\n\t}\n\treturn numA / numB, nil\n}\n\nquotient, err := divide(10, 2)\nfmt.Println(quotient, err)\n// 결과: 5 <nil>"
          },
          {
            "id": "language-go-p02-part-5",
            "title": "에러 검사[if err != nil]",
            "content": "err := fmt.Errorf(\"0으로 나눌 수 없음\")\nif err != nil {\n\tfmt.Println(err)\n\treturn\n}",
            "displayContent": "// 에러 검사[if err != nil]\nerr := fmt.Errorf(\"0으로 나눌 수 없음\")\nif err != nil {\n\tfmt.Println(err)\n\treturn\n}\n// 결과: 0으로 나눌 수 없음"
          },
          {
            "id": "language-go-p02-part-6",
            "title": "포인터[pointer & *]",
            "content": "countValue := 1\ncountPtr := &countValue\n*countPtr = 2\nfmt.Println(countValue)",
            "displayContent": "// 포인터[pointer & *] — 주소로 값을 공유·변경한다\ncountValue := 1\ncountPtr := &countValue\n*countPtr = 2\nfmt.Println(countValue)\n// 결과: 2"
          },
          {
            "id": "language-go-p02-part-7",
            "title": "구조체 포인터[struct pointer]",
            "content": "type User struct {\n\tName string\n}\n\nuserItem := &User{Name: \"kim\"}\nuserItem.Name = \"lee\"\nfmt.Println(userItem.Name)",
            "displayContent": "// 구조체 포인터[struct pointer]\ntype User struct {\n\tName string\n}\n\nuserItem := &User{Name: \"kim\"}\nuserItem.Name = \"lee\"\nfmt.Println(userItem.Name)\n// 결과: lee"
          },
          {
            "id": "language-go-p02-part-8",
            "title": "인터페이스[interface / Stringer]",
            "content": "type Labeler interface {\n\tLabel() string\n}\n\ntype Product struct {\n\tName string\n}\n\nfunc (p Product) Label() string {\n\treturn p.Name\n}\n\nvar item Labeler = Product{Name: \"keyboard\"}\nfmt.Println(item.Label())",
            "displayContent": "// 인터페이스[interface / Stringer] — 메서드 집합만 맞으면 구현\ntype Labeler interface {\n\tLabel() string\n}\n\ntype Product struct {\n\tName string\n}\n\nfunc (p Product) Label() string {\n\treturn p.Name\n}\n\nvar item Labeler = Product{Name: \"keyboard\"}\nfmt.Println(item.Label())\n// 결과: keyboard"
          },
          {
            "id": "language-go-p02-part-9",
            "title": "고루틴[go func]",
            "content": "done := make(chan bool)\ngo func() {\n\tfmt.Println(\"worker\")\n\tdone <- true\n}()\n<-done",
            "displayContent": "// 고루틴[go func] — 가벼운 동시 실행\ndone := make(chan bool)\ngo func() {\n\tfmt.Println(\"worker\")\n\tdone <- true\n}()\n<-done\n// 결과: worker"
          },
          {
            "id": "language-go-p02-part-10",
            "title": "채널[chan]",
            "content": "messages := make(chan string, 1)\nmessages <- \"ping\"\nfmt.Println(<-messages)",
            "displayContent": "// 채널[chan]\nmessages := make(chan string, 1)\nmessages <- \"ping\"\nfmt.Println(<-messages)\n// 결과: ping"
          },
          {
            "id": "language-go-p02-part-11",
            "title": "셀렉트[select]",
            "content": "chA := make(chan string, 1)\nchA <- \"a\"\nselect {\ncase msg := <-chA:\n\tfmt.Println(msg)\ndefault:\n\tfmt.Println(\"none\")\n}",
            "displayContent": "// 셀렉트[select] — 준비된 채널 하나와 통신한다\nchA := make(chan string, 1)\nchA <- \"a\"\nselect {\ncase msg := <-chA:\n\tfmt.Println(msg)\ndefault:\n\tfmt.Println(\"none\")\n}\n// 결과: a"
          },
          {
            "id": "language-go-p02-part-12",
            "title": "문자열 처리[strings]",
            "content": "import (\n\t\"fmt\"\n\t\"strings\"\n)\n\ntagText := \"go,api,server\"\ntagList := strings.Split(tagText, \",\")\nfmt.Println(tagList)",
            "displayContent": "// 문자열 처리[strings]\nimport (\n\t\"fmt\"\n\t\"strings\"\n)\n\ntagText := \"go,api,server\"\ntagList := strings.Split(tagText, \",\")\nfmt.Println(tagList)\n// 결과: [go api server]"
          },
          {
            "id": "language-go-p02-part-13",
            "title": "시간[time]",
            "content": "import (\n\t\"fmt\"\n\t\"time\"\n)\n\nnow := time.Now()\nfmt.Println(now.Format(\"2006-01-02\"))",
            "displayContent": "// 시간[time]\nimport (\n\t\"fmt\"\n\t\"time\"\n)\n\nnow := time.Now()\nfmt.Println(now.Format(\"2006-01-02\"))"
          },
          {
            "id": "language-go-p02-part-14",
            "title": "HTTP 서버[net/http]",
            "content": "package main\n\nimport (\n\t\"fmt\"\n\t\"net/http\"\n)\n\nfunc main() {\n\thttp.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n\t\tfmt.Fprint(w, \"Hello\")\n\t})\n\thttp.ListenAndServe(\":8080\", nil)\n}",
            "displayContent": "// HTTP 서버[net/http] — Hello 응답 최소 예\npackage main\n\nimport (\n\t\"fmt\"\n\t\"net/http\"\n)\n\nfunc main() {\n\thttp.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n\t\tfmt.Fprint(w, \"Hello\")\n\t})\n\thttp.ListenAndServe(\":8080\", nil)\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "java",
    "label": "Java",
    "folderName": "java",
    "lessons": [
      {
        "id": "language-java-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/java/P01.기본-패턴.yaml",
        "language": "java",
        "parts": [
          {
            "id": "language-java-p01-part-1",
            "title": "기본 타입[primitive / String]",
            "content": "int userAge = 30;\ndouble scoreValue = 95.5;\nboolean isAdmin = true;\nString userName = \"kim\";\nSystem.out.println(userAge + \" \" + scoreValue + \" \" + isAdmin + \" \" + userName);",
            "displayContent": "// 기본 타입[primitive / String]\nint userAge = 30;\ndouble scoreValue = 95.5;\nboolean isAdmin = true;\nString userName = \"kim\";\nSystem.out.println(userAge + \" \" + scoreValue + \" \" + isAdmin + \" \" + userName);\n// 결과: 30 95.5 true kim"
          },
          {
            "id": "language-java-p01-part-2",
            "title": "조건문[if / else]",
            "content": "int userAge = 30;\nif (userAge >= 20) {\n    System.out.println(\"adult\");\n} else {\n    System.out.println(\"minor\");\n}",
            "displayContent": "// 조건문[if / else]\nint userAge = 30;\nif (userAge >= 20) {\n    System.out.println(\"adult\");\n} else {\n    System.out.println(\"minor\");\n}\n// 결과: adult"
          },
          {
            "id": "language-java-p01-part-3",
            "title": "분기[switch]",
            "content": "String roleName = \"admin\";\nswitch (roleName) {\n    case \"user\":\n        System.out.println(\"user\");\n        break;\n    case \"admin\":\n        System.out.println(\"admin\");\n        break;\n    default:\n        System.out.println(\"unknown\");\n        break;\n}",
            "displayContent": "// 분기[switch]\nString roleName = \"admin\";\nswitch (roleName) {\n    case \"user\":\n        System.out.println(\"user\");\n        break;\n    case \"admin\":\n        System.out.println(\"admin\");\n        break;\n    default:\n        System.out.println(\"unknown\");\n        break;\n}\n// 결과: admin"
          },
          {
            "id": "language-java-p01-part-4",
            "title": "반복[for]",
            "content": "for (int index = 0; index < 3; index++) {\n    System.out.println(index);\n}",
            "displayContent": "// 반복[for]\nfor (int index = 0; index < 3; index++) {\n    System.out.println(index);\n}\n// 결과: 0 1 2"
          },
          {
            "id": "language-java-p01-part-5",
            "title": "반복[while]",
            "content": "int count = 0;\nwhile (count < 3) {\n    System.out.println(count);\n    count++;\n}",
            "displayContent": "// 반복[while]\nint count = 0;\nwhile (count < 3) {\n    System.out.println(count);\n    count++;\n}\n// 결과: 0 1 2"
          },
          {
            "id": "language-java-p01-part-6",
            "title": "향상된 for[for-each]",
            "content": "String[] colorList = { \"red\", \"green\", \"blue\" };\nfor (String colorItem : colorList) {\n    System.out.println(colorItem);\n}",
            "displayContent": "// 향상된 for[for-each]\nString[] colorList = { \"red\", \"green\", \"blue\" };\nfor (String colorItem : colorList) {\n    System.out.println(colorItem);\n}\n// 결과: red green blue"
          },
          {
            "id": "language-java-p01-part-7",
            "title": "메서드[method]",
            "content": "class Calc {\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(5, 7));\n    }\n}",
            "displayContent": "// 메서드[method]\nclass Calc {\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(5, 7));\n    }\n}\n// 결과: 12"
          },
          {
            "id": "language-java-p01-part-8",
            "title": "메서드 오버로딩[method overloading]",
            "content": "class Calc {\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    static double add(double numA, double numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(1, 2));\n        System.out.println(add(1.5, 2.5));\n    }\n}",
            "displayContent": "// 메서드 오버로딩[method overloading]\n// 이름 같고 매개변수 타입·개수가 다르면 된다\nclass Calc {\n    static int add(int numA, int numB) {\n        return numA + numB;\n    }\n\n    static double add(double numA, double numB) {\n        return numA + numB;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(1, 2));\n        System.out.println(add(1.5, 2.5));\n    }\n}\n// 결과: 3 / 4.0"
          },
          {
            "id": "language-java-p01-part-9",
            "title": "리스트[ArrayList]",
            "content": "import java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nnameList.add(\"lee\");\nSystem.out.println(nameList);",
            "displayContent": "// 리스트[ArrayList]\nimport java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nnameList.add(\"lee\");\nSystem.out.println(nameList);\n// 결과: [kim, lee]"
          },
          {
            "id": "language-java-p01-part-10",
            "title": "맵[HashMap]",
            "content": "import java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Integer> ageMap = new HashMap<>();\nageMap.put(\"kim\", 30);\nageMap.put(\"lee\", 25);\nSystem.out.println(ageMap.get(\"kim\"));",
            "displayContent": "// 맵[HashMap]\nimport java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Integer> ageMap = new HashMap<>();\nageMap.put(\"kim\", 30);\nageMap.put(\"lee\", 25);\nSystem.out.println(ageMap.get(\"kim\"));\n// 결과: 30"
          },
          {
            "id": "language-java-p01-part-11",
            "title": "집합[HashSet]",
            "content": "import java.util.HashSet;\nimport java.util.Set;\n\nSet<String> tagSet = new HashSet<>();\ntagSet.add(\"java\");\ntagSet.add(\"java\");\ntagSet.add(\"sql\");\nSystem.out.println(tagSet);",
            "displayContent": "// 집합[HashSet]\n// 중복을 자동으로 제거한다\nimport java.util.HashSet;\nimport java.util.Set;\n\nSet<String> tagSet = new HashSet<>();\ntagSet.add(\"java\");\ntagSet.add(\"java\");\ntagSet.add(\"sql\");\nSystem.out.println(tagSet);\n// 결과: [java, sql] (순서는 보장되지 않음)"
          },
          {
            "id": "language-java-p01-part-12",
            "title": "컬렉션 순회[for-each]",
            "content": "import java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nnameList.add(\"lee\");\nfor (String nameItem : nameList) {\n    System.out.println(nameItem);\n}",
            "displayContent": "// 컬렉션 순회[for-each]\nimport java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nnameList.add(\"lee\");\nfor (String nameItem : nameList) {\n    System.out.println(nameItem);\n}\n// 결과: kim lee"
          }
        ]
      },
      {
        "id": "language-java-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/java/P02.실무-패턴.yaml",
        "language": "java",
        "parts": [
          {
            "id": "language-java-p02-part-1",
            "title": "클래스와 생성자[class / constructor]",
            "content": "class User {\n    String name;\n    int age;\n\n    User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nUser user = new User(\"kim\", 30);\nSystem.out.println(user.name + \"(\" + user.age + \")\");",
            "displayContent": "// 클래스와 생성자[class / constructor]\nclass User {\n    String name;\n    int age;\n\n    User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nUser user = new User(\"kim\", 30);\nSystem.out.println(user.name + \"(\" + user.age + \")\");\n// 결과: kim(30)"
          },
          {
            "id": "language-java-p02-part-2",
            "title": "접근 제어[public / private]",
            "content": "class Account {\n    private int balance;\n\n    public void deposit(int amount) {\n        balance += amount;\n    }\n\n    public int getBalance() {\n        return balance;\n    }\n}\n\nAccount account = new Account();\naccount.deposit(100);\nSystem.out.println(account.getBalance());",
            "displayContent": "// 접근 제어[public / private]\nclass Account {\n    private int balance;\n\n    public void deposit(int amount) {\n        balance += amount;\n    }\n\n    public int getBalance() {\n        return balance;\n    }\n}\n\nAccount account = new Account();\naccount.deposit(100);\nSystem.out.println(account.getBalance());\n// 결과: 100"
          },
          {
            "id": "language-java-p02-part-3",
            "title": "정적·상수[static / final]",
            "content": "class Config {\n    static final int MAX_SIZE = 100;\n\n    static int doubleValue(int num) {\n        return num * 2;\n    }\n}\n\nSystem.out.println(Config.MAX_SIZE);\nSystem.out.println(Config.doubleValue(5));",
            "displayContent": "// 정적·상수[static / final]\nclass Config {\n    static final int MAX_SIZE = 100;\n\n    static int doubleValue(int num) {\n        return num * 2;\n    }\n}\n\nSystem.out.println(Config.MAX_SIZE);\nSystem.out.println(Config.doubleValue(5));\n// 결과: 100 / 10"
          },
          {
            "id": "language-java-p02-part-4",
            "title": "상속[extends]",
            "content": "class Animal {\n    String name;\n\n    Animal(String name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n}\n\nDog dog = new Dog(\"happy\");\nSystem.out.println(dog.name);",
            "displayContent": "// 상속[extends]\nclass Animal {\n    String name;\n\n    Animal(String name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n}\n\nDog dog = new Dog(\"happy\");\nSystem.out.println(dog.name);\n// 결과: happy"
          },
          {
            "id": "language-java-p02-part-5",
            "title": "인터페이스[interface / implements]",
            "content": "interface Printer {\n    void print(String text);\n}\n\nclass ConsolePrinter implements Printer {\n    public void print(String text) {\n        System.out.println(text);\n    }\n}\n\nPrinter printer = new ConsolePrinter();\nprinter.print(\"hello\");",
            "displayContent": "// 인터페이스[interface / implements]\ninterface Printer {\n    void print(String text);\n}\n\nclass ConsolePrinter implements Printer {\n    public void print(String text) {\n        System.out.println(text);\n    }\n}\n\nPrinter printer = new ConsolePrinter();\nprinter.print(\"hello\");\n// 결과: hello"
          },
          {
            "id": "language-java-p02-part-6",
            "title": "재정의[override]",
            "content": "class Animal {\n    String speak() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    String speak() {\n        return \"woof\";\n    }\n}\n\nSystem.out.println(new Dog().speak());",
            "displayContent": "// 재정의[override]\nclass Animal {\n    String speak() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    String speak() {\n        return \"woof\";\n    }\n}\n\nSystem.out.println(new Dog().speak());\n// 결과: woof"
          },
          {
            "id": "language-java-p02-part-7",
            "title": "추상 클래스[abstract]",
            "content": "abstract class Shape {\n    abstract double area();\n}\n\nclass Square extends Shape {\n    double side;\n\n    Square(double side) {\n        this.side = side;\n    }\n\n    double area() {\n        return side * side;\n    }\n}\n\nSystem.out.println(new Square(3).area());",
            "displayContent": "// 추상 클래스[abstract]\n// 구현을 강제하고 싶을 때 짧게 쓴다\nabstract class Shape {\n    abstract double area();\n}\n\nclass Square extends Shape {\n    double side;\n\n    Square(double side) {\n        this.side = side;\n    }\n\n    double area() {\n        return side * side;\n    }\n}\n\nSystem.out.println(new Square(3).area());\n// 결과: 9.0"
          },
          {
            "id": "language-java-p02-part-8",
            "title": "예외 처리[try / catch / finally]",
            "content": "try {\n    int parsedValue = Integer.parseInt(\"123\");\n    System.out.println(parsedValue);\n} catch (NumberFormatException err) {\n    System.out.println(\"parse error\");\n} finally {\n    System.out.println(\"done\");\n}",
            "displayContent": "// 예외 처리[try / catch / finally]\ntry {\n    int parsedValue = Integer.parseInt(\"123\");\n    System.out.println(parsedValue);\n} catch (NumberFormatException err) {\n    System.out.println(\"parse error\");\n} finally {\n    System.out.println(\"done\");\n}\n// 결과: 123 / done"
          },
          {
            "id": "language-java-p02-part-9",
            "title": "예외 던지기[throw / throws]",
            "content": "class AgeGuard {\n    static void checkAge(int age) throws Exception {\n        if (age < 0) {\n            throw new Exception(\"invalid age\");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(-1);\n        } catch (Exception err) {\n            System.out.println(err.getMessage());\n        }\n    }\n}",
            "displayContent": "// 예외 던지기[throw / throws]\n// Checked: 호출부가 반드시 처리(또는 throws 선언)\n// Unchecked(RuntimeException): 선언 없이도 던질 수 있음\nclass AgeGuard {\n    static void checkAge(int age) throws Exception {\n        if (age < 0) {\n            throw new Exception(\"invalid age\");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(-1);\n        } catch (Exception err) {\n            System.out.println(err.getMessage());\n        }\n    }\n}\n// 결과: invalid age"
          },
          {
            "id": "language-java-p02-part-10",
            "title": "제네릭[List of String]",
            "content": "import java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nString firstName = nameList.get(0);\nSystem.out.println(firstName);",
            "displayContent": "// 제네릭[List of String]\n// 타입을 <>로 고정해 캐스팅을 줄인다\nimport java.util.ArrayList;\nimport java.util.List;\n\nList<String> nameList = new ArrayList<>();\nnameList.add(\"kim\");\nString firstName = nameList.get(0);\nSystem.out.println(firstName);\n// 결과: kim"
          },
          {
            "id": "language-java-p02-part-11",
            "title": "람다[forEach]",
            "content": "import java.util.Arrays;\nimport java.util.List;\n\nList<String> nameList = Arrays.asList(\"kim\", \"lee\");\nnameList.forEach(item -> System.out.println(item.toUpperCase()));",
            "displayContent": "// 람다[forEach]\nimport java.util.Arrays;\nimport java.util.List;\n\nList<String> nameList = Arrays.asList(\"kim\", \"lee\");\nnameList.forEach(item -> System.out.println(item.toUpperCase()));\n// 결과: KIM / LEE"
          },
          {
            "id": "language-java-p02-part-12",
            "title": "스트림[filter / map / collect]",
            "content": "import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<Integer> numList = Arrays.asList(1, 2, 3, 4);\nList<Integer> resultList = numList.stream()\n        .filter(num -> num % 2 == 0)\n        .map(num -> num * 10)\n        .collect(Collectors.toList());\nSystem.out.println(resultList);",
            "displayContent": "// 스트림[filter / map / collect]\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<Integer> numList = Arrays.asList(1, 2, 3, 4);\nList<Integer> resultList = numList.stream()\n        .filter(num -> num % 2 == 0)\n        .map(num -> num * 10)\n        .collect(Collectors.toList());\nSystem.out.println(resultList);\n// 결과: [20, 40]"
          },
          {
            "id": "language-java-p02-part-13",
            "title": "파일 읽기[BufferedReader]",
            "content": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\ntry (BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"))) {\n    String line = reader.readLine();\n    System.out.println(line);\n} catch (IOException err) {\n    System.out.println(\"io error\");\n}",
            "displayContent": "// 파일 읽기[BufferedReader]\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\ntry (BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"))) {\n    String line = reader.readLine();\n    System.out.println(line);\n} catch (IOException err) {\n    System.out.println(\"io error\");\n}"
          },
          {
            "id": "language-java-p02-part-14",
            "title": "스레드[Thread / Runnable]",
            "content": "Runnable task = () -> System.out.println(\"run\");\nThread worker = new Thread(task);\nworker.start();",
            "displayContent": "// 스레드[Thread / Runnable]\n// 작업을 별도 흐름으로 실행하는 개념만\nRunnable task = () -> System.out.println(\"run\");\nThread worker = new Thread(task);\nworker.start();\n// 결과: run"
          }
        ]
      }
    ]
  },
  {
    "id": "javascript",
    "label": "JavaScript",
    "folderName": "javascript",
    "lessons": [
      {
        "id": "language-javascript-p01",
        "title": "P01.변수-구조분해",
        "fileName": "P01.변수-구조분해.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P01.변수-구조분해.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p01-part-1",
            "title": "변수 스코프[variable scope]",
            "content": "var varA = 'function-scoped';\nlet letA = 'block-scoped';\n\nvar userObj = { name: 'kim' };\nuserObj.name = 'lee';",
            "displayContent": "/* 변수 스코프[variable scope] */\nvar varA = 'function-scoped';      // 함수 스코프[function scope], undefined 호이스팅[hoisting]\nlet letA = 'block-scoped';         // 블록 스코프[block scope], TDZ (선언 전 접근 → ReferenceError)\n// const constA = 'read-only';     // 재할당 불가[immutable binding] (속성은 변경 가능)\n\nvar userObj = { name: 'kim' };\nuserObj.name = 'lee';   // ✅ 속성 변경[property mutation] 가능\n// userObj = {};        // ❌ 재할당[reassignment] 불가 (const일 경우)"
          },
          {
            "id": "language-javascript-p01-part-2",
            "title": "지수[exponentiation] / 논리 할당 연산자[logical assignment operator]",
            "content": "2 ** 10\n2 ** 3 ** 2\n\nvar laA = 1;\nlaA &&= 99;\n\nvar laB = 0;\nlaB ||= 99;\n\nvar laC = null;\nlaC ??= 99;",
            "displayContent": "/* 지수[exponentiation] / 논리 할당 연산자[logical assignment operator] */\n2 ** 10          // 1024\n2 ** 3 ** 2      // 512 (우→좌: 3**2=9, 2**9=512)\n\nvar laA = 1;\nlaA &&= 99;      // truthy → 재할당[assignment]: 99\n\nvar laB = 0;\nlaB ||= 99;      // falsy → 재할당[assignment]: 99\n\nvar laC = null;\nlaC ??= 99;      // null|undefined → 재할당[assignment]: 99"
          },
          {
            "id": "language-javascript-p01-part-3",
            "title": "Nullish 병합[nullish coalescing] (??)",
            "content": "null      ?? 'default'\nundefined ?? 'default'\n0         ?? 'default'\n''        ?? 'default'",
            "displayContent": "/* Nullish 병합[nullish coalescing] (??) */\nnull      ?? 'default'   // 'default'\nundefined ?? 'default'   // 'default'\n0         ?? 'default'   // 0   (falsy지만 null이 아님)\n''        ?? 'default'   // ''  (falsy지만 null이 아님)"
          },
          {
            "id": "language-javascript-p01-part-4",
            "title": "옵셔널 체이닝[optional chaining] (?.)",
            "content": "var safeObj = { inner: { val: 42 } };\nsafeObj?.inner?.val\nsafeObj?.missing?.val\nsafeObj?.method?.()",
            "displayContent": "/* 옵셔널 체이닝[optional chaining] (?.) */\nvar safeObj = { inner: { val: 42 } };\nsafeObj?.inner?.val       // 42\nsafeObj?.missing?.val     // undefined (단락 평가[short-circuit evaluation], 에러 없음)\nsafeObj?.method?.()       // undefined (메서드 부재 시 안전 호출)"
          },
          {
            "id": "language-javascript-p01-part-5",
            "title": "스프레드 연산자[spread operator]",
            "content": "var mergedObj = { x: 1, ...{ y: 2, z: 3 } };\nvar mergedArr = [1, ...[2, 3]];",
            "displayContent": "/* 스프레드 연산자[spread operator] */\nvar mergedObj = { x: 1, ...{ y: 2, z: 3 } };   // { x: 1, y: 2, z: 3 }\nvar mergedArr = [1, ...[2, 3]];                 // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p01-part-6",
            "title": "배열 구조분해[array destructuring]",
            "content": "var [adA, adB] = [10, 20];\nvar [adC, , adD] = [1, 2, 3];\nvar [adE, ...adRest] = [1, 2, 3];",
            "displayContent": "/* 배열 구조분해[array destructuring] */\nvar [adA, adB] = [10, 20];           // adA=10, adB=20\nvar [adC, , adD] = [1, 2, 3];        // adC=1, adD=3 (두 번째 건너뜀)\nvar [adE, ...adRest] = [1, 2, 3];    // adE=1, adRest=[2, 3]"
          },
          {
            "id": "language-javascript-p01-part-7",
            "title": "값 교환[swap]",
            "content": "var [swapA, swapB] = [100, 200];\n[swapA, swapB] = [swapB, swapA];",
            "displayContent": "// 값 교환[swap]\nvar [swapA, swapB] = [100, 200];\n[swapA, swapB] = [swapB, swapA];     // swapA=200, swapB=100"
          },
          {
            "id": "language-javascript-p01-part-8",
            "title": "객체 구조분해[object destructuring]",
            "content": "var { name: odName, age: odAge = 30 } = { name: 'kim' };\n\nvar { a: odA, b: odB } = { a: 1, b: 2 };\n\nvar { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };",
            "displayContent": "/* 객체 구조분해[object destructuring] */\nvar { name: odName, age: odAge = 30 } = { name: 'kim' };\n// odName='kim', odAge=30 (기본값[default value] 적용)\n\nvar { a: odA, b: odB } = { a: 1, b: 2 };\n// odA=1, odB=2 (키→변수 이름 변경[aliasing])\n\nvar { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };\n// odP=1, odRest={ q:2, r:3 } (나머지 수집[rest collection])"
          },
          {
            "id": "language-javascript-p01-part-9",
            "title": "중첩 구조분해[nested destructuring]",
            "content": "var nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };\nvar { id: nestedId, addr: { city: nestedCity } } = nestedSrc;",
            "displayContent": "/* 중첩 구조분해[nested destructuring] */\nvar nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };\nvar { id: nestedId, addr: { city: nestedCity } } = nestedSrc;\n// nestedId=7, nestedCity='Seoul'"
          },
          {
            "id": "language-javascript-p01-part-10",
            "title": "파라미터 구조분해[parameter destructuring]",
            "content": "function showUser({ name, role = 'user' }) {\n  return `${name}(${role})`;\n}\nshowUser({ name: 'kim' });\nshowUser({ name: 'lee', role: 'admin' });",
            "displayContent": "/* 파라미터 구조분해[parameter destructuring] */\nfunction showUser({ name, role = 'user' }) {\n  return `${name}(${role})`;\n}\nshowUser({ name: 'kim' });                // 'kim(user)'\nshowUser({ name: 'lee', role: 'admin' }); // 'lee(admin)'"
          },
          {
            "id": "language-javascript-p01-part-11",
            "title": "for...of + 구조분해[destructuring]",
            "content": "var teamList = [\n  { name: 'kim', score: 90 },\n  { name: 'lee', score: 80 },\n];\nfor (var { name: tName, score: tScore } of teamList) {\n  console.log(tName, tScore);\n}",
            "displayContent": "/* for...of + 구조분해[destructuring] */\nvar teamList = [\n  { name: 'kim', score: 90 },\n  { name: 'lee', score: 80 },\n];\nfor (var { name: tName, score: tScore } of teamList) {\n  console.log(tName, tScore);\n}\n// kim 90\n// lee 80"
          },
          {
            "id": "language-javascript-p01-part-12",
            "title": "동적 키 구조분해[computed property destructuring]",
            "content": "var dynKey = 'color';\nvar { [dynKey]: dynVal } = { color: 'blue' };",
            "displayContent": "/* 동적 키 구조분해[computed property destructuring] */\nvar dynKey = 'color';\nvar { [dynKey]: dynVal } = { color: 'blue' };\n// dynVal='blue'"
          },
          {
            "id": "language-javascript-p01-part-13",
            "title": "삼항 연산자 중첩[nested ternary operator]",
            "content": "function grade(score) {\n  return score >= 90 ? 'A'\n       : score >= 80 ? 'B'\n       : score >= 70 ? 'C'\n       :               'F';\n}\ngrade(85)\ngrade(65)",
            "displayContent": "/* 삼항 연산자 중첩[nested ternary operator] */\nfunction grade(score) {\n  return score >= 90 ? 'A'\n       : score >= 80 ? 'B'\n       : score >= 70 ? 'C'\n       :               'F';\n}\ngrade(85)  // 'B'\ngrade(65)  // 'F'"
          }
        ]
      },
      {
        "id": "language-javascript-p02",
        "title": "P02.배열",
        "fileName": "P02.배열.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P02.배열.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p02-part-1",
            "title": "배열 생성[array creation]",
            "content": "Array.of(1, 2, 3)\nArray.from('ABC')\nArray.from({ length: 3 }, (_, i) => i)\nArray.from(new Set([1, 2, 2, 3]))\nArray.isArray([1, 2])",
            "displayContent": "/* 배열 생성[array creation] */\nArray.of(1, 2, 3)                        // [1, 2, 3]\nArray.from('ABC')                        // ['A', 'B', 'C']\nArray.from({ length: 3 }, (_, i) => i)  // [0, 1, 2]\nArray.from(new Set([1, 2, 2, 3]))        // [1, 2, 3] (중복 제거[deduplication])\nArray.isArray([1, 2])                    // true"
          },
          {
            "id": "language-javascript-p02-part-2",
            "title": "기본 접근[access] / 변환[conversion]",
            "content": "[9, 8, 7].at(0)\n[9, 8, 7].at(-1)\n[1, 2, 'a'].toString()\n['A', 'B', 'C'].join(' - ')",
            "displayContent": "/* 기본 접근[access] / 변환[conversion] */\n[9, 8, 7].at(0)     // 9\n[9, 8, 7].at(-1)    // 7 (음수 인덱스[negative index])\n[1, 2, 'a'].toString()       // '1,2,a'\n['A', 'B', 'C'].join(' - ')  // 'A - B - C'"
          },
          {
            "id": "language-javascript-p02-part-3",
            "title": "평탄화[flatten]",
            "content": "[1, [2, [3]]].flat()\n[1, [2, [3]]].flat(Infinity)\n['A B', 'C D'].flatMap(e => e.split(' '))",
            "displayContent": "/* 평탄화[flatten] */\n[1, [2, [3]]].flat()           // [1, 2, [3]]  (기본 깊이[depth] 1)\n[1, [2, [3]]].flat(Infinity)   // [1, 2, 3]    (전체 깊이[full depth])\n['A B', 'C D'].flatMap(e => e.split(' '))  // ['A', 'B', 'C', 'D']"
          },
          {
            "id": "language-javascript-p02-part-4",
            "title": "원본 변경[mutation] - 추가/제거",
            "content": "var mutPush = [1, 2];\nmutPush.push(3, 4);\n\nvar mutPop = [1, 2, 3];\nmutPop.pop();\n\nvar mutUnshift = [3, 4];\nmutUnshift.unshift(1, 2);\n\nvar mutShift = [1, 2, 3];\nmutShift.shift();",
            "displayContent": "/* 원본 변경[mutation] - 추가/제거 */\nvar mutPush = [1, 2];\nmutPush.push(3, 4);   // 반환: 4 (길이[length]), mutPush=[1,2,3,4]\n\nvar mutPop = [1, 2, 3];\nmutPop.pop();          // 반환: 3, mutPop=[1,2]\n\nvar mutUnshift = [3, 4];\nmutUnshift.unshift(1, 2);  // 반환: 4, mutUnshift=[1,2,3,4]\n\nvar mutShift = [1, 2, 3];\nmutShift.shift();           // 반환: 1, mutShift=[2,3]"
          },
          {
            "id": "language-javascript-p02-part-5",
            "title": "원본 변경[mutation] - 정렬[sort]",
            "content": "var mutSort = [10, 1, 21, 2];\nmutSort.sort((a, b) => a - b);\nmutSort.reverse();",
            "displayContent": "/* 원본 변경[mutation] - 정렬[sort] */\nvar mutSort = [10, 1, 21, 2];\nmutSort.sort((a, b) => a - b);  // [1, 2, 10, 21] 오름차순[ascending]\nmutSort.reverse();               // [21, 10, 2, 1]"
          },
          {
            "id": "language-javascript-p02-part-6",
            "title": "원본 유지[immutable] (ES2023 - toSorted / toReversed / with)",
            "content": "var immArr = [3, 1, 2];\nimmArr.toSorted((a, b) => a - b)\nimmArr.toReversed()\nimmArr.with(1, 99)\nimmArr",
            "displayContent": "/* 원본 유지[immutable] (ES2023 - toSorted / toReversed / with) */\nvar immArr = [3, 1, 2];\nimmArr.toSorted((a, b) => a - b)  // [1, 2, 3] (원본 유지[non-mutating])\nimmArr.toReversed()               // [2, 1, 3] (원본 유지[non-mutating])\nimmArr.with(1, 99)                // [3, 99, 2] (인덱스1 값 교체[replace], 원본 유지)\nimmArr                            // [3, 1, 2]"
          },
          {
            "id": "language-javascript-p02-part-7",
            "title": "splice vs slice",
            "content": "var spliceArr = ['A', 'B', 'C', 'D', 'E'];\nspliceArr.splice(1, 2);\nspliceArr.splice(1, 0, 'X');\n\n['A', 'B', 'C', 'D'].slice(1, 3)\n['A', 'B', 'C', 'D'].slice(-2)",
            "displayContent": "/* splice vs slice */\nvar spliceArr = ['A', 'B', 'C', 'D', 'E'];\nspliceArr.splice(1, 2);       // 반환[return]: ['B','C'], spliceArr=['A','D','E']\nspliceArr.splice(1, 0, 'X');  // 삽입[insert]: spliceArr=['A','X','D','E']\n\n['A', 'B', 'C', 'D'].slice(1, 3)   // ['B', 'C'] (원본 유지[non-mutating])\n['A', 'B', 'C', 'D'].slice(-2)     // ['C', 'D']"
          },
          {
            "id": "language-javascript-p02-part-8",
            "title": "fill / copyWithin",
            "content": "[0, 0, 0].fill(7)\n[1, 2, 3, 4].fill(0, 1, 3)\n[1, 2, 3, 4, 5].copyWithin(0, 3)",
            "displayContent": "/* fill / copyWithin */\n[0, 0, 0].fill(7)            // [7, 7, 7]\n[1, 2, 3, 4].fill(0, 1, 3)  // [1, 0, 0, 4]\n[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5] (index3부터 index0에 덮어씀[overwrite])"
          },
          {
            "id": "language-javascript-p02-part-9",
            "title": "검색[search]",
            "content": "[10, 20, 30].indexOf(20)\n[10, 20, 30].includes(20)\n[1, 2, 3, 4].find(e => e > 2)\n[1, 2, 3, 4].findIndex(e => e > 2)\n[1, 2, 3, 4].findLast(e => e > 2)\n[1, 2, 3, 4].findLastIndex(e => e > 2)",
            "displayContent": "/* 검색[search] */\n[10, 20, 30].indexOf(20)               // 1\n[10, 20, 30].includes(20)              // true\n[1, 2, 3, 4].find(e => e > 2)         // 3 (첫 번째 일치[match] 요소)\n[1, 2, 3, 4].findIndex(e => e > 2)    // 2 (첫 번째 일치[match] 인덱스)\n[1, 2, 3, 4].findLast(e => e > 2)     // 4 (마지막 일치[match] 요소)\n[1, 2, 3, 4].findLastIndex(e => e > 2) // 3"
          },
          {
            "id": "language-javascript-p02-part-10",
            "title": "조건 검사[predicate]",
            "content": "[2, 4, 6].every(e => e % 2 === 0)\n[1, 2, 3].some(e => e > 2)\n[1, 2, 3].some(e => e > 10)",
            "displayContent": "/* 조건 검사[predicate] */\n[2, 4, 6].every(e => e % 2 === 0)   // true  (모두 충족[all pass])\n[1, 2, 3].some(e => e > 2)          // true  (하나라도 충족[any pass])\n[1, 2, 3].some(e => e > 10)         // false"
          },
          {
            "id": "language-javascript-p02-part-11",
            "title": "변환[transformation]",
            "content": "[1, 2, 3].map(e => e * 2)\n[1, 2, 3, 4].filter(e => e % 2 === 0)\n[1, 2, 3].map(e => e ** 2)",
            "displayContent": "/* 변환[transformation] */\n[1, 2, 3].map(e => e * 2)              // [2, 4, 6]\n[1, 2, 3, 4].filter(e => e % 2 === 0) // [2, 4]\n[1, 2, 3].map(e => e ** 2)            // [1, 4, 9]"
          },
          {
            "id": "language-javascript-p02-part-12",
            "title": "누산[accumulation] (reduce)",
            "content": "[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)\n[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)",
            "displayContent": "/* 누산[accumulation] (reduce) */\n[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)  // 10 (합계[sum])\n[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)  // 10 (최대값[max])"
          },
          {
            "id": "language-javascript-p02-part-13",
            "title": "빈도 카운트[frequency count]",
            "content": "var countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];\ncountSrc.reduce((acc, key) => {\n  acc[key] ??= 0;\n  acc[key]++;\n  return acc;\n}, {});",
            "displayContent": "// 빈도 카운트[frequency count]\nvar countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];\ncountSrc.reduce((acc, key) => {\n  acc[key] ??= 0;\n  acc[key]++;\n  return acc;\n}, {});\n// { A:3, B:2, C:1 }"
          },
          {
            "id": "language-javascript-p02-part-14",
            "title": "그룹핑[grouping]",
            "content": "var groupSrc = [\n  { type: 'fruit', name: 'apple' },\n  { type: 'veg',   name: 'carrot' },\n  { type: 'fruit', name: 'banana' },\n];\ngroupSrc.reduce((acc, item) => {\n  acc[item.type] ??= [];\n  acc[item.type].push(item.name);\n  return acc;\n}, {});",
            "displayContent": "// 그룹핑[grouping]\nvar groupSrc = [\n  { type: 'fruit', name: 'apple' },\n  { type: 'veg',   name: 'carrot' },\n  { type: 'fruit', name: 'banana' },\n];\ngroupSrc.reduce((acc, item) => {\n  acc[item.type] ??= [];\n  acc[item.type].push(item.name);\n  return acc;\n}, {});\n// { fruit: ['apple','banana'], veg: ['carrot'] }"
          },
          {
            "id": "language-javascript-p02-part-15",
            "title": "이터레이터[iterator] (entries / keys / values)",
            "content": "var iterSrc = ['X', 'Y', 'Z'];\nfor (var [idx, val] of iterSrc.entries()) {\n  console.log(idx, val);\n}\n\n[...iterSrc.keys()];\n[...iterSrc.values()];",
            "displayContent": "/* 이터레이터[iterator] (entries / keys / values) */\nvar iterSrc = ['X', 'Y', 'Z'];\nfor (var [idx, val] of iterSrc.entries()) {\n  console.log(idx, val);\n}\n// 0 'X'\n// 1 'Y'\n// 2 'Z'\n\n[...iterSrc.keys()];    // [0, 1, 2]\n[...iterSrc.values()];  // ['X', 'Y', 'Z']"
          },
          {
            "id": "language-javascript-p02-part-16",
            "title": "concat / 스프레드[spread] 비교",
            "content": "[1, 2].concat([3, 4], 5);\n[...[1, 2], ...[3, 4], 5];",
            "displayContent": "/* concat / 스프레드[spread] 비교 */\n[1, 2].concat([3, 4], 5);   // [1, 2, 3, 4, 5]\n[...[1, 2], ...[3, 4], 5];  // [1, 2, 3, 4, 5]"
          }
        ]
      },
      {
        "id": "language-javascript-p03",
        "title": "P03.객체",
        "fileName": "P03.객체.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P03.객체.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p03-part-1",
            "title": "기본 생성[creation] / 접근[access]",
            "content": "var baseObj = { name: 'kim', age: 20 };\nbaseObj.name\nbaseObj['age']",
            "displayContent": "/* 기본 생성[creation] / 접근[access] */\nvar baseObj = { name: 'kim', age: 20 };\nbaseObj.name     // 'kim'\nbaseObj['age']   // 20"
          },
          {
            "id": "language-javascript-p03-part-2",
            "title": "단축 속성명[shorthand property]",
            "content": "var oName = 'lee', oAge = 30;\nvar shortObj = { oName, oAge };",
            "displayContent": "// 단축 속성명[shorthand property]\nvar oName = 'lee', oAge = 30;\nvar shortObj = { oName, oAge };  // { oName: 'lee', oAge: 30 }"
          },
          {
            "id": "language-javascript-p03-part-3",
            "title": "Object.assign - 얕은 병합[shallow merge]",
            "content": "var assignTarget = { a: 1 };\nObject.assign(assignTarget, { b: 2 }, { c: 3 });\n\nvar cloneObj = Object.assign({}, assignTarget);",
            "displayContent": "/* Object.assign - 얕은 병합[shallow merge] */\nvar assignTarget = { a: 1 };\nObject.assign(assignTarget, { b: 2 }, { c: 3 });\n// assignTarget = { a:1, b:2, c:3 } (원본 변경[mutation])\n\nvar cloneObj = Object.assign({}, assignTarget);  // 얕은 복사[shallow copy]"
          },
          {
            "id": "language-javascript-p03-part-4",
            "title": "스프레드[spread]로 병합[merge] / 복사[copy]",
            "content": "var src1 = { a: 1, b: 2 };\nvar src2 = { b: 9, c: 3 };\nvar spreadMerge = { ...src1, ...src2 };\nvar spreadClone = { ...src1 };",
            "displayContent": "/* 스프레드[spread]로 병합[merge] / 복사[copy] */\nvar src1 = { a: 1, b: 2 };\nvar src2 = { b: 9, c: 3 };\nvar spreadMerge = { ...src1, ...src2 };  // { a:1, b:9, c:3 } (나중이 우선[last-wins])\nvar spreadClone = { ...src1 };           // { a:1, b:2 } (얕은 복사[shallow copy])"
          },
          {
            "id": "language-javascript-p03-part-5",
            "title": "Object.entries / keys / values",
            "content": "var sampleObj = { a: 1, b: 2, c: 3 };\nObject.keys(sampleObj)\nObject.values(sampleObj)\nObject.entries(sampleObj)",
            "displayContent": "/* Object.entries / keys / values */\nvar sampleObj = { a: 1, b: 2, c: 3 };\nObject.keys(sampleObj)    // ['a', 'b', 'c']\nObject.values(sampleObj)  // [1, 2, 3]\nObject.entries(sampleObj) // [['a',1], ['b',2], ['c',3]]"
          },
          {
            "id": "language-javascript-p03-part-6",
            "title": "Object.fromEntries - 배열[array]→객체[object] / Map→객체[object]",
            "content": "Object.fromEntries([['x', 10], ['y', 20]])",
            "displayContent": "/* Object.fromEntries - 배열[array]→객체[object] / Map→객체[object] */\nObject.fromEntries([['x', 10], ['y', 20]])  // { x:10, y:20 }"
          },
          {
            "id": "language-javascript-p03-part-7",
            "title": "값 변환[value transformation] 패턴",
            "content": "var doubleVals = Object.fromEntries(\n  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])\n);\n\nvar mapToObj = new Map([['p', 1], ['q', 2]]);\nObject.fromEntries(mapToObj)",
            "displayContent": "// 값 변환[value transformation] 패턴\nvar doubleVals = Object.fromEntries(\n  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])\n);\n// { a:2, b:4 }\n\n// Map → Object\nvar mapToObj = new Map([['p', 1], ['q', 2]]);\nObject.fromEntries(mapToObj)  // { p:1, q:2 }"
          },
          {
            "id": "language-javascript-p03-part-8",
            "title": "Object.hasOwn - 직접 소유 속성[own property] 확인",
            "content": "var hasObj = { x: 1 };\nObject.hasOwn(hasObj, 'x')\nObject.hasOwn(hasObj, 'toString')\n'x'        in hasObj\n'toString' in hasObj",
            "displayContent": "/* Object.hasOwn - 직접 소유 속성[own property] 확인 */\nvar hasObj = { x: 1 };\nObject.hasOwn(hasObj, 'x')        // true  (직접 소유[own])\nObject.hasOwn(hasObj, 'toString') // false (프로토타입 상속[prototype inheritance])\n'x'        in hasObj              // true\n'toString' in hasObj              // true  (상속[inherited] 포함)"
          },
          {
            "id": "language-javascript-p03-part-9",
            "title": "Object.create - 프로토타입[prototype] 지정",
            "content": "var protoBase = { greet() { return `Hi, ${this.name}`; } };\nvar protoChild = Object.create(protoBase);\nprotoChild.name = 'kim';\nprotoChild.greet()\n\nObject.create(null)",
            "displayContent": "/* Object.create - 프로토타입[prototype] 지정 */\nvar protoBase = { greet() { return `Hi, ${this.name}`; } };\nvar protoChild = Object.create(protoBase);\nprotoChild.name = 'kim';\nprotoChild.greet()  // 'Hi, kim'\n\nObject.create(null)  // 프로토타입[prototype] 없는 순수 딕셔너리[plain dictionary]"
          },
          {
            "id": "language-javascript-p03-part-10",
            "title": "Object.freeze / seal",
            "content": "var frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });\nfrozenObj.val = 99;\nfrozenObj.val\nfrozenObj.inner.n = 99;\nfrozenObj.inner.n\n\nvar sealedObj = Object.seal({ val: 1 });\nsealedObj.val = 99;\ndelete sealedObj.val;\nsealedObj.val",
            "displayContent": "/* Object.freeze / seal */\nvar frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });\nfrozenObj.val = 99;     // 무시됨 (strict 모드: TypeError)\nfrozenObj.val           // 1\nfrozenObj.inner.n = 99; // 얕은 동결[shallow freeze] → 중첩 객체는 변경 가능\nfrozenObj.inner.n       // 99\n\nvar sealedObj = Object.seal({ val: 1 });\nsealedObj.val = 99;     // ✅ 값 변경[value mutation] 가능\ndelete sealedObj.val;   // ❌ 삭제[deletion] 불가\nsealedObj.val           // 99"
          },
          {
            "id": "language-javascript-p03-part-11",
            "title": "Object.is - 동일성 비교[identity comparison] (=== 보완)",
            "content": "Object.is(NaN, NaN)\nObject.is(0, -0)\nObject.is({ a: 1 }, { a: 1 })\n\nvar refSame = { a: 1 };\nObject.is(refSame, refSame)",
            "displayContent": "/* Object.is - 동일성 비교[identity comparison] (=== 보완) */\nObject.is(NaN, NaN)    // true  (=== 는 false)\nObject.is(0, -0)       // false (=== 는 true)\nObject.is({ a: 1 }, { a: 1 })  // false (다른 참조[reference])\n\nvar refSame = { a: 1 };\nObject.is(refSame, refSame)     // true"
          },
          {
            "id": "language-javascript-p03-part-12",
            "title": "Computed property - 동적 키[dynamic key]",
            "content": "var prefix = 'item';\nvar dynKeyObj = {\n  [prefix + 1]: 'a',\n  [prefix + 2]: 'b',\n};",
            "displayContent": "/* Computed property - 동적 키[dynamic key] */\nvar prefix = 'item';\nvar dynKeyObj = {\n  [prefix + 1]: 'a',\n  [prefix + 2]: 'b',\n};\n// { item1:'a', item2:'b' }"
          },
          {
            "id": "language-javascript-p03-part-13",
            "title": "Getter / Setter - 접근자 프로퍼티[accessor property]",
            "content": "var tempConv = {\n  _celsius: 0,\n  get fahrenheit() { return this._celsius * 9 / 5 + 32; },\n  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },\n};\ntempConv.fahrenheit = 212;\ntempConv._celsius\ntempConv.fahrenheit",
            "displayContent": "/* Getter / Setter - 접근자 프로퍼티[accessor property] */\nvar tempConv = {\n  _celsius: 0,\n  get fahrenheit() { return this._celsius * 9 / 5 + 32; },\n  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },\n};\ntempConv.fahrenheit = 212;\ntempConv._celsius   // 100\ntempConv.fahrenheit // 212"
          },
          {
            "id": "language-javascript-p03-part-14",
            "title": "이터러블 객체[iterable object] (Symbol.iterator 구현)",
            "content": "var iterableRange = {\n  from: 1,\n  to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from;\n    var last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...iterableRange]",
            "displayContent": "/* 이터러블 객체[iterable object] (Symbol.iterator 구현) */\nvar iterableRange = {\n  from: 1,\n  to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from;\n    var last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...iterableRange]  // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p03-part-15",
            "title": "in 연산자[in operator] / delete",
            "content": "'name' in baseObj\ndelete baseObj.age;\n'age' in baseObj",
            "displayContent": "/* in 연산자[in operator] / delete */\n'name' in baseObj    // true\ndelete baseObj.age;\n'age' in baseObj     // false"
          },
          {
            "id": "language-javascript-p03-part-16",
            "title": "속성 열거[property enumeration] (for...in)",
            "content": "var enumObj = { a: 1, b: 2, c: 3 };\nfor (var key in enumObj) {\n  console.log(key, enumObj[key]);\n}",
            "displayContent": "/* 속성 열거[property enumeration] (for...in) */\nvar enumObj = { a: 1, b: 2, c: 3 };\nfor (var key in enumObj) {\n  console.log(key, enumObj[key]);\n}\n// a 1\n// b 2\n// c 3"
          }
        ]
      },
      {
        "id": "language-javascript-p04",
        "title": "P04.함수",
        "fileName": "P04.함수.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P04.함수.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p04-part-1",
            "title": "함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function]",
            "content": "function declFn(x) { return x * 2; }\nvar exprFn = function (x) { return x * 2; };\nvar arrowFn = x => x * 2;\nvar arrowBlock = x => { return x * 2; };\n\ndeclFn(5)\narrowFn(5)",
            "displayContent": "/* 함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function] */\nfunction declFn(x) { return x * 2; }        // 호이스팅[hoisting] O\nvar exprFn = function (x) { return x * 2; }; // 호이스팅[hoisting] X\nvar arrowFn = x => x * 2;                    // this 없음, 암묵적 반환[implicit return]\nvar arrowBlock = x => { return x * 2; };     // 블록 바디[block body]\n\ndeclFn(5)   // 10\narrowFn(5)  // 10"
          },
          {
            "id": "language-javascript-p04-part-2",
            "title": "기본값 매개변수[default parameter]",
            "content": "function greetFn(name, msg = 'Hello') {\n  return `${msg}, ${name}!`;\n}\ngreetFn('kim')\ngreetFn('lee', 'Hi')",
            "displayContent": "/* 기본값 매개변수[default parameter] */\nfunction greetFn(name, msg = 'Hello') {\n  return `${msg}, ${name}!`;\n}\ngreetFn('kim')           // 'Hello, kim!'\ngreetFn('lee', 'Hi')     // 'Hi, lee!'"
          },
          {
            "id": "language-javascript-p04-part-3",
            "title": "Rest 파라미터[rest parameter]",
            "content": "function sumFn(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nsumFn(1, 2, 3, 4)",
            "displayContent": "/* Rest 파라미터[rest parameter] */\nfunction sumFn(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nsumFn(1, 2, 3, 4)  // 10"
          },
          {
            "id": "language-javascript-p04-part-4",
            "title": "Function 메타 정보[metadata]",
            "content": "declFn.name\n((a, b) => {}).length\n((a, b, c = 0) => {}).length\n((...args) => {}).length",
            "displayContent": "/* Function 메타 정보[metadata] */\ndeclFn.name                    // 'declFn'\n((a, b) => {}).length          // 2\n((a, b, c = 0) => {}).length   // 2 (기본값[default] 이후는 카운트 안됨)\n((...args) => {}).length       // 0 (rest는 카운트 안됨)"
          },
          {
            "id": "language-javascript-p04-part-5",
            "title": "call / apply / bind - 명시적 this 바인딩[explicit this binding]",
            "content": "function greetCtx(greeting) {\n  return `${greeting}, ${this.name}!`;\n}\nvar ctx = { name: 'park' };\ngreetCtx.call(ctx, 'Hello')\ngreetCtx.apply(ctx, ['Hi'])\nvar boundGreet = greetCtx.bind(ctx);\nboundGreet('Hey')",
            "displayContent": "/* call / apply / bind - 명시적 this 바인딩[explicit this binding] */\nfunction greetCtx(greeting) {\n  return `${greeting}, ${this.name}!`;\n}\nvar ctx = { name: 'park' };\ngreetCtx.call(ctx, 'Hello')            // 'Hello, park!'\ngreetCtx.apply(ctx, ['Hi'])            // 'Hi, park!'\nvar boundGreet = greetCtx.bind(ctx);\nboundGreet('Hey')                      // 'Hey, park!'"
          },
          {
            "id": "language-javascript-p04-part-6",
            "title": "bind로 부분 적용[partial application]",
            "content": "var boundHello = greetCtx.bind(ctx, 'Hola');\nboundHello()",
            "displayContent": "// bind로 부분 적용[partial application]\nvar boundHello = greetCtx.bind(ctx, 'Hola');\nboundHello()  // 'Hola, park!'"
          },
          {
            "id": "language-javascript-p04-part-7",
            "title": "IIFE - 즉시 실행 함수[immediately invoked function expression]",
            "content": "var iifeResult = (function (x) { return x * x; })(5);",
            "displayContent": "/* IIFE - 즉시 실행 함수[immediately invoked function expression] */\nvar iifeResult = (function (x) { return x * x; })(5);  // 25"
          },
          {
            "id": "language-javascript-p04-part-8",
            "title": "클로저[closure] - 상태 은닉[encapsulation]",
            "content": "function makeCounter(start) {\n  var count = start ?? 0;\n  return {\n    increment() { return ++count; },\n    decrement() { return --count; },\n    get value()  { return count; },\n  };\n}\nvar counterA = makeCounter(10);\ncounterA.increment()\ncounterA.increment()\ncounterA.value",
            "displayContent": "/* 클로저[closure] - 상태 은닉[encapsulation] */\nfunction makeCounter(start) {\n  var count = start ?? 0;\n  return {\n    increment() { return ++count; },\n    decrement() { return --count; },\n    get value()  { return count; },\n  };\n}\nvar counterA = makeCounter(10);\ncounterA.increment()  // 11\ncounterA.increment()  // 12\ncounterA.value        // 12"
          },
          {
            "id": "language-javascript-p04-part-9",
            "title": "커링[currying]",
            "content": "var add = a => b => a + b;\nadd(3)(4)\n\nvar add5 = add(5);\nadd5(10)\nadd5(20)",
            "displayContent": "/* 커링[currying] */\nvar add = a => b => a + b;\nadd(3)(4)    // 7\n\nvar add5 = add(5);\nadd5(10)     // 15\nadd5(20)     // 25"
          },
          {
            "id": "language-javascript-p04-part-10",
            "title": "클로저 스코프 체인[closure scope chain]",
            "content": "var closureD = 4;\nvar closureFn = a => b => c => a + b + c + closureD;\nclosureFn(1)(2)(3)",
            "displayContent": "/* 클로저 스코프 체인[closure scope chain] */\nvar closureD = 4;\nvar closureFn = a => b => c => a + b + c + closureD;\nclosureFn(1)(2)(3)  // 10"
          },
          {
            "id": "language-javascript-p04-part-11",
            "title": "재귀[recursion]",
            "content": "function factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nfactorial(5)\n\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\nfibonacci(7)",
            "displayContent": "/* 재귀[recursion] */\nfunction factorial(n) {\n  return n <= 1 ? 1 : n * factorial(n - 1);\n}\nfactorial(5)  // 120\n\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\nfibonacci(7)  // 13"
          },
          {
            "id": "language-javascript-p04-part-12",
            "title": "제너레이터[generator]",
            "content": "function* rangeGen(start, end, step = 1) {\n  for (var i = start; i <= end; i += step) yield i;\n}\nvar genIter = rangeGen(1, 5);\ngenIter.next()\ngenIter.next()\n\n[...rangeGen(1, 5)]\n[...rangeGen(0, 10, 2)]",
            "displayContent": "/* 제너레이터[generator] */\nfunction* rangeGen(start, end, step = 1) {\n  for (var i = start; i <= end; i += step) yield i;\n}\nvar genIter = rangeGen(1, 5);\ngenIter.next()  // { value:1, done:false }\ngenIter.next()  // { value:2, done:false }\n\n[...rangeGen(1, 5)]        // [1, 2, 3, 4, 5]\n[...rangeGen(0, 10, 2)]    // [0, 2, 4, 6, 8, 10]"
          },
          {
            "id": "language-javascript-p04-part-13",
            "title": "yield* 위임[delegation]",
            "content": "function* innerGen() { yield 'a'; yield 'b'; }\nfunction* outerGen() {\n  yield 1;\n  yield* innerGen();\n  yield 2;\n}\n[...outerGen()]",
            "displayContent": "/* yield* 위임[delegation] */\nfunction* innerGen() { yield 'a'; yield 'b'; }\nfunction* outerGen() {\n  yield 1;\n  yield* innerGen();  // 다른 제너레이터에 위임[delegate]\n  yield 2;\n}\n[...outerGen()]  // [1, 'a', 'b', 2]"
          },
          {
            "id": "language-javascript-p04-part-14",
            "title": "팩토리 함수 패턴[factory function pattern]",
            "content": "function createUser(name, role) {\n  return {\n    name,\n    role,\n    toString() { return `${this.role}:${this.name}`; },\n  };\n}\nvar adminUser = createUser('kim', 'admin');\nadminUser.toString()",
            "displayContent": "/* 팩토리 함수 패턴[factory function pattern] */\nfunction createUser(name, role) {\n  return {\n    name,\n    role,\n    toString() { return `${this.role}:${this.name}`; },\n  };\n}\nvar adminUser = createUser('kim', 'admin');\nadminUser.toString()  // 'admin:kim'"
          },
          {
            "id": "language-javascript-p04-part-15",
            "title": "프로토타입 메서드[prototype method] 추가",
            "content": "function Animal(name, sound) {\n  this.name = name;\n  this.sound = sound;\n}\nAnimal.prototype.speak = function () {\n  return `${this.name} says ${this.sound}`;\n};\nvar dogA = new Animal('Rex', 'Woof');\ndogA.speak()\ndogA instanceof Animal",
            "displayContent": "/* 프로토타입 메서드[prototype method] 추가 */\nfunction Animal(name, sound) {\n  this.name = name;\n  this.sound = sound;\n}\nAnimal.prototype.speak = function () {\n  return `${this.name} says ${this.sound}`;\n};\nvar dogA = new Animal('Rex', 'Woof');\ndogA.speak()  // 'Rex says Woof'\ndogA instanceof Animal  // true"
          },
          {
            "id": "language-javascript-p04-part-16",
            "title": "객체 내부 메서드 패턴[method definition pattern]",
            "content": "var methodObj = {\n  value: 10,",
            "displayContent": "/* 객체 내부 메서드 패턴[method definition pattern] */\nvar methodObj = {\n  value: 10,"
          },
          {
            "id": "language-javascript-p04-part-17",
            "title": "화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)",
            "content": "  getArrow: () => methodObj.value,\n  getMethod() { return this.value; },\n};\nmethodObj.getArrow()\nmethodObj.getMethod()",
            "displayContent": "  // 화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)\n  getArrow: () => methodObj.value,\n  // 메서드 단축 표기[method shorthand]: this = 호출 객체[calling object]\n  getMethod() { return this.value; },\n};\nmethodObj.getArrow()   // 10\nmethodObj.getMethod()  // 10"
          }
        ]
      },
      {
        "id": "language-javascript-p05",
        "title": "P05.문자열",
        "fileName": "P05.문자열.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P05.문자열.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p05-part-1",
            "title": "기본 접근[basic access]",
            "content": "var str1 = 'Hello, World!';\nstr1.length\nstr1[0]\nstr1.at(0)\nstr1.at(-1)\nstr1.charAt(7)\nstr1.charCodeAt(0)",
            "displayContent": "/* 기본 접근[basic access] */\nvar str1 = 'Hello, World!';\nstr1.length        // 13\nstr1[0]            // 'H'\nstr1.at(0)         // 'H'\nstr1.at(-1)        // '!'  (음수 인덱스[negative index])\nstr1.charAt(7)     // 'W'\nstr1.charCodeAt(0) // 72"
          },
          {
            "id": "language-javascript-p05-part-2",
            "title": "대소문자 변환[case conversion]",
            "content": "'hello'.toUpperCase()\n'WORLD'.toLowerCase()",
            "displayContent": "/* 대소문자 변환[case conversion] */\n'hello'.toUpperCase()  // 'HELLO'\n'WORLD'.toLowerCase()  // 'world'"
          },
          {
            "id": "language-javascript-p05-part-3",
            "title": "검색[search]",
            "content": "str1.indexOf('o')\nstr1.lastIndexOf('o')\nstr1.indexOf('xyz')\nstr1.includes('World')\nstr1.startsWith('Hello')\nstr1.endsWith('!')\nstr1.search(/[A-Z]/)",
            "displayContent": "/* 검색[search] */\nstr1.indexOf('o')         // 4  (첫 번째 위치)\nstr1.lastIndexOf('o')     // 8  (마지막 위치)\nstr1.indexOf('xyz')       // -1 (없으면 -1)\nstr1.includes('World')    // true\nstr1.startsWith('Hello')  // true\nstr1.endsWith('!')        // true\nstr1.search(/[A-Z]/)      // 0  (정규식[regex], 첫 번째 매치 인덱스)"
          },
          {
            "id": "language-javascript-p05-part-4",
            "title": "추출[extraction]",
            "content": "'Mozilla'.substring(2, 5)\n'Mozilla'.slice(2, 5)\n'Mozilla'.slice(-5)\n'Mozilla'.slice(-5, -2)",
            "displayContent": "/* 추출[extraction] */\n'Mozilla'.substring(2, 5)  // 'zil' (startIndex, endIndex)\n'Mozilla'.slice(2, 5)      // 'zil'\n'Mozilla'.slice(-5)        // 'ozilla' (음수 인덱스[negative index])\n'Mozilla'.slice(-5, -2)    // 'ozil'"
          },
          {
            "id": "language-javascript-p05-part-5",
            "title": "분리[split]",
            "content": "'a,b,c'.split(',')\n'a,b,c'.split(',', 2)\n'hello'.split('')",
            "displayContent": "/* 분리[split] */\n'a,b,c'.split(',')       // ['a', 'b', 'c']\n'a,b,c'.split(',', 2)    // ['a', 'b'] (limit)\n'hello'.split('')         // ['h', 'e', 'l', 'l', 'o']"
          },
          {
            "id": "language-javascript-p05-part-6",
            "title": "반복[repeat] / 패딩[padding] / 공백 제거[trim]",
            "content": "'ab'.repeat(3)\n'5'.padStart(4, '0')\n'5'.padEnd(4, '0')\n'  trim me  '.trim()\n'  trim me  '.trimStart()\n'  trim me  '.trimEnd()",
            "displayContent": "/* 반복[repeat] / 패딩[padding] / 공백 제거[trim] */\n'ab'.repeat(3)              // 'ababab'\n'5'.padStart(4, '0')        // '0005'\n'5'.padEnd(4, '0')          // '5000'\n'  trim me  '.trim()        // 'trim me'\n'  trim me  '.trimStart()   // 'trim me  '\n'  trim me  '.trimEnd()     // '  trim me'"
          },
          {
            "id": "language-javascript-p05-part-7",
            "title": "치환[replace]",
            "content": "'aabbcc'.replace('b', 'X')\n'aabbcc'.replaceAll('b', 'X')\n'aabbcc'.replace(/b/g, 'X')",
            "displayContent": "/* 치환[replace] */\n'aabbcc'.replace('b', 'X')      // 'aXbcc'  (첫 번째만)\n'aabbcc'.replaceAll('b', 'X')   // 'aaXXcc' (전체)\n'aabbcc'.replace(/b/g, 'X')     // 'aaXXcc' (정규식[regex] 플래그 g)"
          },
          {
            "id": "language-javascript-p05-part-8",
            "title": "캡처 그룹[capture group] 참조 ($1, $2, ...)",
            "content": "'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')",
            "displayContent": "// 캡처 그룹[capture group] 참조 ($1, $2, ...)\n'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'"
          },
          {
            "id": "language-javascript-p05-part-9",
            "title": "정규식 매치[regex match]",
            "content": "var str2 = 'cat bat sat';\nstr2.match(/[bcs]at/g)\nstr2.replace(/[bcs]at/g, 'hat')",
            "displayContent": "/* 정규식 매치[regex match] */\nvar str2 = 'cat bat sat';\nstr2.match(/[bcs]at/g)           // ['cat', 'bat', 'sat']\nstr2.replace(/[bcs]at/g, 'hat')  // 'hat hat hat'"
          },
          {
            "id": "language-javascript-p05-part-10",
            "title": "matchAll - 이터레이터[iterator] 반환",
            "content": "var regexAll = /(\\d+)/g;\nvar str3 = 'abc 123 def 456';\n[...str3.matchAll(regexAll)].map(m => m[0])",
            "displayContent": "// matchAll - 이터레이터[iterator] 반환\nvar regexAll = /(\\d+)/g;\nvar str3 = 'abc 123 def 456';\n[...str3.matchAll(regexAll)].map(m => m[0])  // ['123', '456']"
          },
          {
            "id": "language-javascript-p05-part-11",
            "title": "연결[concatenation]",
            "content": "'Hello'.concat(', ', 'World', '!')",
            "displayContent": "/* 연결[concatenation] */\n'Hello'.concat(', ', 'World', '!')  // 'Hello, World!'"
          },
          {
            "id": "language-javascript-p05-part-12",
            "title": "템플릿 리터럴[template literal]",
            "content": "var tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`\n`${tplScore >= 90 ? '우수' : '보통'}`",
            "displayContent": "/* 템플릿 리터럴[template literal] */\nvar tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`  // '이름: kim, 점수: 95점'\n`${tplScore >= 90 ? '우수' : '보통'}`   // '우수'"
          },
          {
            "id": "language-javascript-p05-part-13",
            "title": "멀티라인[multiline]",
            "content": "var multiLine = `첫 번째 줄\n두 번째 줄`;\nmultiLine",
            "displayContent": "// 멀티라인[multiline]\nvar multiLine = `첫 번째 줄\n두 번째 줄`;\nmultiLine  // '첫 번째 줄\\n두 번째 줄'"
          },
          {
            "id": "language-javascript-p05-part-14",
            "title": "String.raw - 이스케이프 비처리[raw string]",
            "content": "String.raw`C:\\Users\\name`\nString.raw`\\n \\t \\r`",
            "displayContent": "/* String.raw - 이스케이프 비처리[raw string] */\nString.raw`C:\\Users\\name`     // 'C:\\\\Users\\\\name'\nString.raw`\\n \\t \\r`          // '\\\\n \\\\t \\\\r'"
          },
          {
            "id": "language-javascript-p05-part-15",
            "title": "문자 코드[character code] 변환",
            "content": "String.fromCharCode(65, 66, 67)\n'A'.charCodeAt(0)",
            "displayContent": "/* 문자 코드[character code] 변환 */\nString.fromCharCode(65, 66, 67)  // 'ABC'\n'A'.charCodeAt(0)                // 65"
          },
          {
            "id": "language-javascript-p05-part-16",
            "title": "이터러블[iterable] - 스프레드[spread] / for...of",
            "content": "[...'ABC']\nfor (var ch of 'hi') { console.log(ch); }",
            "displayContent": "/* 이터러블[iterable] - 스프레드[spread] / for...of */\n[...'ABC']  // ['A', 'B', 'C']\nfor (var ch of 'hi') { console.log(ch); }\n// h\n// i"
          },
          {
            "id": "language-javascript-p05-part-17",
            "title": "숫자→문자열 변환[number-to-string conversion]",
            "content": "(255).toString(16)\n(255).toString(2)\n(3.14159).toFixed(2)",
            "displayContent": "/* 숫자→문자열 변환[number-to-string conversion] */\n(255).toString(16)   // 'ff'  (16진수[hexadecimal])\n(255).toString(2)    // '11111111' (2진수[binary])\n(3.14159).toFixed(2) // '3.14'"
          }
        ]
      },
      {
        "id": "language-javascript-p06",
        "title": "P06.클래스",
        "fileName": "P06.클래스.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P06.클래스.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p06-part-1",
            "title": "기본 클래스[basic class] 정의",
            "content": "class Vehicle {\n  static count = 0;\n  #fuel;\n\n  constructor(type, fuel) {\n    this.type = type;\n    this.#fuel = fuel;\n    Vehicle.count++;\n  }\n\n  getFuel() { return this.#fuel; }\n  static getCount() { return Vehicle.count; }\n}",
            "displayContent": "/* 기본 클래스[basic class] 정의 */\nclass Vehicle {\n  static count = 0;          // 정적 속성[static field] (인스턴스 공유 안됨)\n  #fuel;                     // 프라이빗 필드[private field] (클래스 외부 접근 불가)\n\n  constructor(type, fuel) {\n    this.type = type;\n    this.#fuel = fuel;\n    Vehicle.count++;\n  }\n\n  getFuel() { return this.#fuel; }   // 프라이빗 접근자[private accessor]\n  static getCount() { return Vehicle.count; }   // 정적 메서드[static method]\n}"
          },
          {
            "id": "language-javascript-p06-part-2",
            "title": "기본 클래스[basic class] 사용",
            "content": "var car1 = new Vehicle('car', 'gasoline');\nvar car2 = new Vehicle('bike', 'none');\ncar1.getFuel()\nVehicle.count\nVehicle.getCount()",
            "displayContent": "/* 기본 클래스[basic class] 사용 */\nvar car1 = new Vehicle('car', 'gasoline');\nvar car2 = new Vehicle('bike', 'none');\ncar1.getFuel()          // 'gasoline'\nVehicle.count           // 2 (정적 속성은 클래스에서 접근)\nVehicle.getCount()      // 2"
          },
          {
            "id": "language-javascript-p06-part-3",
            "title": "Getter / Setter - 접근자 프로퍼티[accessor property]",
            "content": "class Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  get area()      { return Math.PI * this.radius ** 2; }\n  set diameter(d) { this.radius = d / 2; }\n}\n\nvar circle1 = new Circle(5);\ncircle1.area.toFixed(2)\ncircle1.diameter = 20;\ncircle1.radius",
            "displayContent": "/* Getter / Setter - 접근자 프로퍼티[accessor property] */\nclass Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  get area()      { return Math.PI * this.radius ** 2; }\n  set diameter(d) { this.radius = d / 2; }\n}\n\nvar circle1 = new Circle(5);\ncircle1.area.toFixed(2)   // '78.54' (호출 아님, 속성처럼 읽음)\ncircle1.diameter = 20;    // setter 실행\ncircle1.radius            // 10"
          },
          {
            "id": "language-javascript-p06-part-4",
            "title": "상속[inheritance] - 부모 클래스",
            "content": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() { return `${this.name} makes a noise.`; }\n}",
            "displayContent": "/* 상속[inheritance] - 부모 클래스 */\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() { return `${this.name} makes a noise.`; }\n}"
          },
          {
            "id": "language-javascript-p06-part-5",
            "title": "상속[inheritance] - extends / super / override",
            "content": "class Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() {\n    return `${this.name} barks.`;\n  }\n  parentSpeak() {\n    return super.speak();\n  }\n}",
            "displayContent": "/* 상속[inheritance] - extends / super / override */\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);          // 부모[parent] constructor 호출 필수 (this 사용 전)\n    this.breed = breed;\n  }\n  speak() {               // 오버라이드[override]\n    return `${this.name} barks.`;\n  }\n  parentSpeak() {\n    return super.speak(); // 부모 메서드[parent method] 호출\n  }\n}"
          },
          {
            "id": "language-javascript-p06-part-6",
            "title": "상속[inheritance] - 인스턴스 확인",
            "content": "var dog1 = new Dog('Rex', 'Labrador');\ndog1.speak()\ndog1.parentSpeak()\ndog1 instanceof Dog\ndog1 instanceof Animal",
            "displayContent": "/* 상속[inheritance] - 인스턴스 확인 */\nvar dog1 = new Dog('Rex', 'Labrador');\ndog1.speak()             // 'Rex barks.' (오버라이드 적용)\ndog1.parentSpeak()       // 'Rex makes a noise.'\ndog1 instanceof Dog      // true\ndog1 instanceof Animal   // true (부모 타입으로도 판정)"
          },
          {
            "id": "language-javascript-p06-part-7",
            "title": "정적 초기화 블록[static initialization block]",
            "content": "class Config {\n  static host;\n  static port;\n  static {\n    Config.host = 'localhost';\n    Config.port = 3000;\n  }\n}\nConfig.host\nConfig.port",
            "displayContent": "/* 정적 초기화 블록[static initialization block] */\nclass Config {\n  static host;\n  static port;\n  static {\n    Config.host = 'localhost';\n    Config.port = 3000;\n  }\n}\nConfig.host  // 'localhost'\nConfig.port  // 3000"
          },
          {
            "id": "language-javascript-p06-part-8",
            "title": "클래스 표현식[class expression]",
            "content": "var Rectangle = class {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() { return this.w * this.h; }\n};\nnew Rectangle(4, 5).area",
            "displayContent": "/* 클래스 표현식[class expression] */\nvar Rectangle = class {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() { return this.w * this.h; }\n};\nnew Rectangle(4, 5).area  // 20"
          },
          {
            "id": "language-javascript-p06-part-9",
            "title": "믹스인[mixin] 정의",
            "content": "var Serializable = Base => class extends Base {\n  serialize() { return JSON.stringify(this); }\n};\n\nvar Timestamped = Base => class extends Base {\n  constructor(...args) {\n    super(...args);\n    this.createdAt = new Date().toISOString().slice(0, 10);\n  }\n};",
            "displayContent": "/* 믹스인[mixin] 정의 - 클래스를 반환하는 함수 */\nvar Serializable = Base => class extends Base {\n  serialize() { return JSON.stringify(this); }\n};\n\nvar Timestamped = Base => class extends Base {\n  constructor(...args) {\n    super(...args);\n    this.createdAt = new Date().toISOString().slice(0, 10);\n  }\n};"
          },
          {
            "id": "language-javascript-p06-part-10",
            "title": "믹스인[mixin] 적용",
            "content": "class BaseEntity {\n  constructor(data) { Object.assign(this, data); }\n}\n\nclass UserEntity extends Serializable(Timestamped(BaseEntity)) {}\n\nvar userEntity = new UserEntity({ id: 1, name: 'kim' });\nuserEntity.serialize()",
            "displayContent": "/* 믹스인[mixin] 적용 - 상속 체인에 끼워 넣기 */\nclass BaseEntity {\n  constructor(data) { Object.assign(this, data); }\n}\n\nclass UserEntity extends Serializable(Timestamped(BaseEntity)) {}\n\nvar userEntity = new UserEntity({ id: 1, name: 'kim' });\nuserEntity.serialize()   // '{\"id\":1,\"name\":\"kim\",\"createdAt\":\"2026-03-18\"}'"
          },
          {
            "id": "language-javascript-p06-part-11",
            "title": "내장 클래스 상속[built-in class inheritance]",
            "content": "class TypedArray extends Array {\n  sum() { return this.reduce((acc, n) => acc + n, 0); }\n  avg() { return this.sum() / this.length; }\n}\n\nvar nums = new TypedArray(10, 20, 30);\nnums.sum()\nnums.map(n => n * 2)",
            "displayContent": "/* 내장 클래스 상속[built-in class inheritance] */\nclass TypedArray extends Array {\n  sum() { return this.reduce((acc, n) => acc + n, 0); }\n  avg() { return this.sum() / this.length; }\n}\n\nvar nums = new TypedArray(10, 20, 30);\nnums.sum()           // 60\nnums.map(n => n * 2) // TypedArray [20, 40, 60] (반환도 TypedArray)"
          },
          {
            "id": "language-javascript-p06-part-12",
            "title": "instanceof / constructor 확인[inspection]",
            "content": "dog1.constructor === Dog\ndog1.constructor.name\nObject.getPrototypeOf(dog1) === Dog.prototype",
            "displayContent": "/* instanceof / constructor 확인[inspection] */\ndog1.constructor === Dog                        // true\ndog1.constructor.name                           // 'Dog'\nObject.getPrototypeOf(dog1) === Dog.prototype   // true"
          }
        ]
      },
      {
        "id": "language-javascript-p07",
        "title": "P07.비동기",
        "fileName": "P07.비동기.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P07.비동기.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p07-part-1",
            "title": "Promise 기본 생성[basic construction]",
            "content": "var pBasic = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('완료'), 100);\n});\npBasic.then(v => console.log(v));",
            "displayContent": "/* Promise 기본 생성[basic construction] */\nvar pBasic = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('완료'), 100);\n});\npBasic.then(v => console.log(v));   // '완료'"
          },
          {
            "id": "language-javascript-p07-part-2",
            "title": "Promise.resolve / reject 단축[shorthand]",
            "content": "Promise.resolve(42).then(v => console.log(v));\nPromise.reject(new Error('실패')).catch(e => console.error(e.message));",
            "displayContent": "/* Promise.resolve / reject 단축[shorthand] */\nPromise.resolve(42).then(v => console.log(v));                          // 42\nPromise.reject(new Error('실패')).catch(e => console.error(e.message)); // '실패'"
          },
          {
            "id": "language-javascript-p07-part-3",
            "title": "then / catch / finally 체인[chain]",
            "content": "Promise.resolve(1)\n  .then(v => v + 1)\n  .then(v => { if (v > 1) throw new Error('too big'); return v; })\n  .catch(e => { console.error(e.message); return 0; })\n  .finally(() => console.log('정리 완료'));",
            "displayContent": "/* then / catch / finally 체인[chain] */\nPromise.resolve(1)\n  .then(v => v + 1)           // 2\n  .then(v => { if (v > 1) throw new Error('too big'); return v; })\n  .catch(e => { console.error(e.message); return 0; })  // 'too big' → 0\n  .finally(() => console.log('정리 완료'));              // 항상 실행[always runs]"
          },
          {
            "id": "language-javascript-p07-part-4",
            "title": "Promise.all - 전체 성공 대기[wait for all] (병렬[parallel])",
            "content": "Promise.all([\n  Promise.resolve(1),\n  Promise.resolve(2),\n  new Promise(r => setTimeout(() => r(3), 50)),\n]).then(values => console.log(values));",
            "displayContent": "/* Promise.all - 전체 성공 대기[wait for all] (병렬[parallel]) */\nPromise.all([\n  Promise.resolve(1),\n  Promise.resolve(2),\n  new Promise(r => setTimeout(() => r(3), 50)),\n]).then(values => console.log(values));\n// [1, 2, 3]"
          },
          {
            "id": "language-javascript-p07-part-5",
            "title": "하나라도 reject → 즉시 거부[short-circuit rejection]",
            "content": "Promise.all([\n  Promise.resolve('ok'),\n  Promise.reject(new Error('fail')),\n]).catch(e => console.error(e.message));",
            "displayContent": "// 하나라도 reject → 즉시 거부[short-circuit rejection]\nPromise.all([\n  Promise.resolve('ok'),\n  Promise.reject(new Error('fail')),\n]).catch(e => console.error(e.message));  // 'fail'"
          },
          {
            "id": "language-javascript-p07-part-6",
            "title": "Promise.allSettled - 전부 완료 후 결과 수집[settle all]",
            "content": "Promise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(new Error('oops')),\n]).then(results => console.log(results));",
            "displayContent": "/* Promise.allSettled - 전부 완료 후 결과 수집[settle all] */\nPromise.allSettled([\n  Promise.resolve(1),\n  Promise.reject(new Error('oops')),\n]).then(results => console.log(results));\n// [\n//   { status:'fulfilled', value: 1 },\n//   { status:'rejected',  reason: Error: oops },\n// ]"
          },
          {
            "id": "language-javascript-p07-part-7",
            "title": "Promise.any - 가장 먼저 이행[first fulfilled]",
            "content": "Promise.any([\n  Promise.reject('a'),\n  new Promise(r => setTimeout(() => r('b'), 100)),\n  new Promise(r => setTimeout(() => r('c'), 50)),\n]).then(v => console.log(v));",
            "displayContent": "/* Promise.any - 가장 먼저 이행[first fulfilled] */\nPromise.any([\n  Promise.reject('a'),\n  new Promise(r => setTimeout(() => r('b'), 100)),\n  new Promise(r => setTimeout(() => r('c'), 50)),\n]).then(v => console.log(v));  // 'c'"
          },
          {
            "id": "language-javascript-p07-part-8",
            "title": "전부 reject → AggregateError",
            "content": "Promise.any([Promise.reject('x'), Promise.reject('y')])\n  .catch(e => console.log(e.constructor.name));",
            "displayContent": "// 전부 reject → AggregateError\nPromise.any([Promise.reject('x'), Promise.reject('y')])\n  .catch(e => console.log(e.constructor.name));  // 'AggregateError'"
          },
          {
            "id": "language-javascript-p07-part-9",
            "title": "Promise.race - 가장 먼저 정산[first settled] (resolve or reject)",
            "content": "Promise.race([\n  new Promise(r => setTimeout(() => r('slow'), 200)),\n  new Promise(r => setTimeout(() => r('fast'), 50)),\n]).then(v => console.log(v));",
            "displayContent": "/* Promise.race - 가장 먼저 정산[first settled] (resolve or reject) */\nPromise.race([\n  new Promise(r => setTimeout(() => r('slow'), 200)),\n  new Promise(r => setTimeout(() => r('fast'), 50)),\n]).then(v => console.log(v));  // 'fast'"
          },
          {
            "id": "language-javascript-p07-part-10",
            "title": "async / await 기본",
            "content": "async function fetchData(id) {\n  var data = await Promise.resolve({ id, name: 'kim' });\n  return data;\n}\nfetchData(1).then(d => console.log(d));",
            "displayContent": "/* async / await 기본 */\nasync function fetchData(id) {\n  var data = await Promise.resolve({ id, name: 'kim' });  // 비동기 대기[async await]\n  return data;\n}\nfetchData(1).then(d => console.log(d));  // { id:1, name:'kim' }"
          },
          {
            "id": "language-javascript-p07-part-11",
            "title": "async / await - try/catch 에러 처리[error handling]",
            "content": "async function safeFetch(url) {\n  try {\n    var res = await Promise.reject(new Error('네트워크 오류'));\n    return res;\n  } catch (err) {\n    console.error('에러:', err.message);\n    return null;\n  } finally {\n    console.log('요청 종료');\n  }\n}\nsafeFetch('/api/data');",
            "displayContent": "/* async / await - try/catch 에러 처리[error handling] */\nasync function safeFetch(url) {\n  try {\n    var res = await Promise.reject(new Error('네트워크 오류'));\n    return res;\n  } catch (err) {\n    console.error('에러:', err.message);  // '에러: 네트워크 오류'\n    return null;\n  } finally {\n    console.log('요청 종료');  // 항상 실행[always runs]\n  }\n}\nsafeFetch('/api/data');"
          },
          {
            "id": "language-javascript-p07-part-12",
            "title": "순차 실행[sequential execution]",
            "content": "async function sequential() {\n  var a = await Promise.resolve(1);\n  var b = await Promise.resolve(2);\n  var c = await Promise.resolve(3);\n  return a + b + c;\n}\nsequential().then(v => console.log(v));",
            "displayContent": "/* 순차 실행[sequential execution] */\nasync function sequential() {\n  var a = await Promise.resolve(1);\n  var b = await Promise.resolve(2);  // a 완료 후 실행[after a resolves]\n  var c = await Promise.resolve(3);  // b 완료 후 실행[after b resolves]\n  return a + b + c;\n}\nsequential().then(v => console.log(v));  // 6"
          },
          {
            "id": "language-javascript-p07-part-13",
            "title": "병렬 실행[parallel execution] - Promise.all + await",
            "content": "async function parallel() {\n  var [a, b, c] = await Promise.all([\n    Promise.resolve(10),\n    Promise.resolve(20),\n    Promise.resolve(30),\n  ]);\n  return a + b + c;\n}\nparallel().then(v => console.log(v));",
            "displayContent": "/* 병렬 실행[parallel execution] - Promise.all + await */\nasync function parallel() {\n  var [a, b, c] = await Promise.all([\n    Promise.resolve(10),\n    Promise.resolve(20),\n    Promise.resolve(30),\n  ]);\n  return a + b + c;\n}\nparallel().then(v => console.log(v));  // 60"
          },
          {
            "id": "language-javascript-p07-part-14",
            "title": "비동기 이터레이터[async iterator] (for await...of)",
            "content": "async function* asyncCounter(start, end) {\n  for (var i = start; i <= end; i++) {\n    await new Promise(r => setTimeout(r, 10));\n    yield i;\n  }\n}\n\nasync function runCounter() {\n  for await (var num of asyncCounter(1, 3)) {\n    console.log(num);\n  }\n}\nrunCounter();",
            "displayContent": "/* 비동기 이터레이터[async iterator] (for await...of) */\nasync function* asyncCounter(start, end) {\n  for (var i = start; i <= end; i++) {\n    await new Promise(r => setTimeout(r, 10));  // 딜레이[delay] 10ms\n    yield i;\n  }\n}\n\nasync function runCounter() {\n  for await (var num of asyncCounter(1, 3)) {\n    console.log(num);\n  }\n}\nrunCounter();\n// 1\n// 2\n// 3"
          },
          {
            "id": "language-javascript-p07-part-15",
            "title": "에러를 값으로 처리하는 패턴[error-as-value pattern]",
            "content": "async function safeAll() {\n  var results = await Promise.all([\n    Promise.resolve('ok').catch(e => e),\n    Promise.reject(new Error('fail')).catch(e => e),\n  ]);\n  console.log(results);\n}\nsafeAll();",
            "displayContent": "/* 에러를 값으로 처리하는 패턴[error-as-value pattern] */\nasync function safeAll() {\n  var results = await Promise.all([\n    Promise.resolve('ok').catch(e => e),\n    Promise.reject(new Error('fail')).catch(e => e),\n  ]);\n  console.log(results);\n}\nsafeAll();\n// ['ok', Error: fail]"
          }
        ]
      },
      {
        "id": "language-javascript-p08",
        "title": "P08.컬렉션-심볼",
        "fileName": "P08.컬렉션-심볼.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P08.컬렉션-심볼.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p08-part-1",
            "title": "Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음)",
            "content": "var mapA = new Map();\nmapA.set('name', 'kim');\nmapA.set(42, 'forty-two');\nmapA.set({ id: 1 }, 'objKey');\nmapA.get('name')\nmapA.get(42)\nmapA.has('name')\nmapA.size\nmapA.delete('name');\nmapA.size",
            "displayContent": "/* Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음) */\nvar mapA = new Map();\nmapA.set('name', 'kim');\nmapA.set(42, 'forty-two');\nmapA.set({ id: 1 }, 'objKey');  // 객체도 키[key] 가능\nmapA.get('name')    // 'kim'\nmapA.get(42)        // 'forty-two'\nmapA.has('name')    // true\nmapA.size           // 3\nmapA.delete('name');\nmapA.size           // 2"
          },
          {
            "id": "language-javascript-p08-part-2",
            "title": "Map 생성 - 배열[array]로 초기화[initialize]",
            "content": "var mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);\nmapB.get('b')",
            "displayContent": "/* Map 생성 - 배열[array]로 초기화[initialize] */\nvar mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);\nmapB.get('b')   // 2"
          },
          {
            "id": "language-javascript-p08-part-3",
            "title": "Map 순회[iteration]",
            "content": "for (var [k, v] of mapB) {\n  console.log(k, v);\n}\n\n[...mapB.keys()]\n[...mapB.values()]\n[...mapB.entries()]\n\nmapB.forEach((v, k) => console.log(k, v));",
            "displayContent": "/* Map 순회[iteration] */\nfor (var [k, v] of mapB) {\n  console.log(k, v);\n}\n// a 1\n// b 2\n// c 3\n\n[...mapB.keys()]    // ['a', 'b', 'c']\n[...mapB.values()]  // [1, 2, 3]\n[...mapB.entries()] // [['a',1], ['b',2], ['c',3]]\n\nmapB.forEach((v, k) => console.log(k, v));\n// a 1 / b 2 / c 3"
          },
          {
            "id": "language-javascript-p08-part-4",
            "title": "Map ↔ Object 변환[conversion]",
            "content": "var mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));\n\nObject.fromEntries(mapFromObj)",
            "displayContent": "/* Map ↔ Object 변환[conversion] */\nvar mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));\n// Map { 'x' => 10, 'y' => 20 }\n\nObject.fromEntries(mapFromObj)\n// { x: 10, y: 20 }"
          },
          {
            "id": "language-javascript-p08-part-5",
            "title": "WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable])",
            "content": "var weakMapA = new WeakMap();\nvar wmKey = {};\nweakMapA.set(wmKey, 'private-data');\nweakMapA.get(wmKey)\nweakMapA.has(wmKey)",
            "displayContent": "/* WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable]) */\nvar weakMapA = new WeakMap();\nvar wmKey = {};\nweakMapA.set(wmKey, 'private-data');\nweakMapA.get(wmKey)   // 'private-data'\nweakMapA.has(wmKey)   // true\n// wmKey = null; → GC 수거[garbage collection] 시 WeakMap에서도 자동 제거"
          },
          {
            "id": "language-javascript-p08-part-6",
            "title": "Set - 중복 없는 값 컬렉션[unique value collection]",
            "content": "var setA = new Set([1, 2, 3, 2, 1]);\nsetA.size\nsetA.has(2)\nsetA.add(4);\nsetA.delete(1);\n[...setA]",
            "displayContent": "/* Set - 중복 없는 값 컬렉션[unique value collection] */\nvar setA = new Set([1, 2, 3, 2, 1]);  // 중복 자동 제거[automatic deduplication]\nsetA.size    // 3\nsetA.has(2)  // true\nsetA.add(4);\nsetA.delete(1);\n[...setA]    // [2, 3, 4]"
          },
          {
            "id": "language-javascript-p08-part-7",
            "title": "Set 활용 - 배열 중복 제거[array deduplication]",
            "content": "var dupArr = [1, 2, 2, 3, 3, 3, 4];\nvar uniqArr = [...new Set(dupArr)];",
            "displayContent": "/* Set 활용 - 배열 중복 제거[array deduplication] */\nvar dupArr = [1, 2, 2, 3, 3, 3, 4];\nvar uniqArr = [...new Set(dupArr)];  // [1, 2, 3, 4]"
          },
          {
            "id": "language-javascript-p08-part-8",
            "title": "Set 순회[iteration]",
            "content": "var setB = new Set(['X', 'Y', 'Z']);\nfor (var item of setB) { console.log(item); }",
            "displayContent": "/* Set 순회[iteration] */\nvar setB = new Set(['X', 'Y', 'Z']);\nfor (var item of setB) { console.log(item); }\n// X / Y / Z"
          },
          {
            "id": "language-javascript-p08-part-9",
            "title": "Set 집합 연산[set operation]",
            "content": "var setX = new Set([1, 2, 3, 4]);\nvar setY = new Set([3, 4, 5, 6]);\n\nvar union        = new Set([...setX, ...setY]);\nvar intersection = new Set([...setX].filter(v =>  setY.has(v)));\nvar difference   = new Set([...setX].filter(v => !setY.has(v)));\n\n[...union]\n[...intersection]\n[...difference]",
            "displayContent": "/* Set 집합 연산[set operation] */\nvar setX = new Set([1, 2, 3, 4]);\nvar setY = new Set([3, 4, 5, 6]);\n\nvar union        = new Set([...setX, ...setY]);                          // 합집합[union]: {1,2,3,4,5,6}\nvar intersection = new Set([...setX].filter(v =>  setY.has(v)));         // 교집합[intersection]: {3,4}\nvar difference   = new Set([...setX].filter(v => !setY.has(v)));         // 차집합[difference]: {1,2}\n\n[...union]        // [1, 2, 3, 4, 5, 6]\n[...intersection] // [3, 4]\n[...difference]   // [1, 2]"
          },
          {
            "id": "language-javascript-p08-part-10",
            "title": "WeakSet - 약한 참조[weak reference] 객체 집합",
            "content": "var weakSetA = new WeakSet();\nvar wsObj = { id: 1 };\nweakSetA.add(wsObj);\nweakSetA.has(wsObj)",
            "displayContent": "/* WeakSet - 약한 참조[weak reference] 객체 집합 */\nvar weakSetA = new WeakSet();\nvar wsObj = { id: 1 };\nweakSetA.add(wsObj);\nweakSetA.has(wsObj)   // true\n// wsObj = null; → GC 수거[garbage collection] 시 자동 제거"
          },
          {
            "id": "language-javascript-p08-part-11",
            "title": "Symbol - 고유 식별자[unique identifier]",
            "content": "var symA = Symbol('description');\nvar symB = Symbol('description');\nsymA === symB\nsymA.toString()\nsymA.description\ntypeof symA",
            "displayContent": "/* Symbol - 고유 식별자[unique identifier] */\nvar symA = Symbol('description');\nvar symB = Symbol('description');\nsymA === symB            // false (항상 고유[always unique])\nsymA.toString()          // 'Symbol(description)'\nsymA.description         // 'description'\ntypeof symA              // 'symbol'"
          },
          {
            "id": "language-javascript-p08-part-12",
            "title": "Symbol을 객체 키[object key]로 사용",
            "content": "var symId = Symbol('id');\nvar symRole = Symbol('role');\nvar symObj = {\n  [symId]: 42,\n  [symRole]: 'admin',\n  name: 'kim',\n};\nsymObj[symId]\nsymObj[symRole]\nObject.keys(symObj)\nObject.getOwnPropertySymbols(symObj)",
            "displayContent": "/* Symbol을 객체 키[object key]로 사용 */\nvar symId = Symbol('id');\nvar symRole = Symbol('role');\nvar symObj = {\n  [symId]: 42,\n  [symRole]: 'admin',\n  name: 'kim',\n};\nsymObj[symId]           // 42\nsymObj[symRole]         // 'admin'\nObject.keys(symObj)     // ['name']  (Symbol은 열거[enumeration] 안됨)\nObject.getOwnPropertySymbols(symObj)  // [Symbol(id), Symbol(role)]"
          },
          {
            "id": "language-javascript-p08-part-13",
            "title": "Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능)",
            "content": "var globalSym1 = Symbol.for('shared');\nvar globalSym2 = Symbol.for('shared');\nglobalSym1 === globalSym2\nSymbol.keyFor(globalSym1)",
            "displayContent": "/* Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능) */\nvar globalSym1 = Symbol.for('shared');\nvar globalSym2 = Symbol.for('shared');\nglobalSym1 === globalSym2  // true (같은 키면 동일 심볼)\nSymbol.keyFor(globalSym1)  // 'shared'"
          },
          {
            "id": "language-javascript-p08-part-14",
            "title": "Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol])",
            "content": "var rangeObj = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from, last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...rangeObj]",
            "displayContent": "/* Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol]) */\nvar rangeObj = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    var cur = this.from, last = this.to;\n    return {\n      next() {\n        return cur <= last\n          ? { value: cur++, done: false }\n          : { value: undefined, done: true };\n      }\n    };\n  }\n};\n[...rangeObj]  // [1, 2, 3]"
          },
          {
            "id": "language-javascript-p08-part-15",
            "title": "Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion])",
            "content": "var customNum = {\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return 42;\n    if (hint === 'string') return 'forty-two';\n    return true;\n  }\n};\n+customNum\n`${customNum}`\ncustomNum + ''",
            "displayContent": "/* Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion]) */\nvar customNum = {\n  [Symbol.toPrimitive](hint) {\n    if (hint === 'number') return 42;\n    if (hint === 'string') return 'forty-two';\n    return true;  // 기본값[default hint]\n  }\n};\n+customNum            // 42\n`${customNum}`        // 'forty-two'\ncustomNum + ''        // 'true'"
          }
        ]
      },
      {
        "id": "language-javascript-p09",
        "title": "P09.정규식",
        "fileName": "P09.정규식.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P09.정규식.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p09-part-1",
            "title": "생성[creation] - 리터럴[literal] vs 생성자[constructor]",
            "content": "var reLiteral = /hello/gi;\nvar reConstructor = new RegExp('hello', 'gi');\n\nreLiteral.test('Hello World')\nreConstructor.test('HELLO')",
            "displayContent": "/* 생성[creation] - 리터럴[literal] vs 생성자[constructor] */\nvar reLiteral = /hello/gi;                    // 리터럴[literal] 표기 (컴파일 타임)\nvar reConstructor = new RegExp('hello', 'gi'); // 생성자[constructor] (런타임, 동적 패턴)\n\nreLiteral.test('Hello World')   // true\nreConstructor.test('HELLO')     // true"
          },
          {
            "id": "language-javascript-p09-part-2",
            "title": "d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공",
            "content": "'aBcDeF'.match(/[a-z]/g)\n'aBcDeF'.match(/[a-z]/gi)\n\n'line1\\nline2'.match(/^\\w+/m)\n'line1\\nline2'.match(/^\\w+/gm)\n\n'hello\\nworld'.match(/hello.world/s)",
            "displayContent": "// d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공\n\n'aBcDeF'.match(/[a-z]/g)   // ['a', 'c', 'e']       (g: 전체)\n'aBcDeF'.match(/[a-z]/gi)  // ['a', 'B', 'c', 'D', 'e', 'F'] (i: 대소문자 무시)\n\n'line1\\nline2'.match(/^\\w+/m)    // ['line1'] (m 없으면 첫 줄만)\n'line1\\nline2'.match(/^\\w+/gm)   // ['line1', 'line2'] (m: 각 줄의 ^)\n\n'hello\\nworld'.match(/hello.world/s)  // ['hello\\nworld'] (s: . 이 \\n 매치)"
          },
          {
            "id": "language-javascript-p09-part-3",
            "title": "앵커[anchor]",
            "content": "'Hello World'.match(/^Hello/)\n'Hello World'.match(/World$/)\n\n'cat cats'.match(/\\bcat\\b/g)\n'cat cats'.match(/cat\\B/g)",
            "displayContent": "/* 앵커[anchor] */\n'Hello World'.match(/^Hello/)   // ['Hello']  (^ 문자열 시작[start of string])\n'Hello World'.match(/World$/)   // ['World']  ($ 문자열 끝[end of string])\n\n'cat cats'.match(/\\bcat\\b/g)    // ['cat']     (\\b 단어 경계[word boundary])\n'cat cats'.match(/cat\\B/g)      // ['cat']     (\\B 단어 경계가 아님[non-word boundary])"
          },
          {
            "id": "language-javascript-p09-part-4",
            "title": "문자 클래스[character class]",
            "content": "'a1 b2'.match(/\\d/g)\n'a1 b2'.match(/\\D/g)\n'a1 b2'.match(/\\w/g)\n'a1 b2'.match(/\\W/g)\n'a1 b2'.match(/\\s/g)\n'a1 b2'.match(/\\S/g)\n'a1.b'.match(/./g)",
            "displayContent": "/* 문자 클래스[character class] */\n'a1 b2'.match(/\\d/g)   // ['1', '2']       (\\d 숫자[digit] 0-9)\n'a1 b2'.match(/\\D/g)   // ['a', ' ', 'b', ' '] (\\D 비숫자[non-digit])\n'a1 b2'.match(/\\w/g)   // ['a','1','b','2']    (\\w 단어 문자[word char]: [a-zA-Z0-9_])\n'a1 b2'.match(/\\W/g)   // [' ', ' ']           (\\W 비단어[non-word char])\n'a1 b2'.match(/\\s/g)   // [' ', ' ']           (\\s 공백[whitespace])\n'a1 b2'.match(/\\S/g)   // ['a','1','b','2']    (\\S 비공백[non-whitespace])\n'a1.b'.match(/./g)     // ['a','1','.','b']    (. 임의의 한 문자[any char except \\n])"
          },
          {
            "id": "language-javascript-p09-part-5",
            "title": "문자셋[character set]",
            "content": "'grey gray'.match(/gr[ae]y/g)\n'hello123'.match(/[a-z]+/g)\n'hello123'.match(/[^a-z]+/g)\n'hello123'.match(/[a-zA-Z0-9]+/g)",
            "displayContent": "/* 문자셋[character set] */\n'grey gray'.match(/gr[ae]y/g)    // ['grey', 'gray']    ([ae] a 또는 e)\n'hello123'.match(/[a-z]+/g)      // ['hello']           ([a-z] 범위[range])\n'hello123'.match(/[^a-z]+/g)     // ['123']             ([^] 부정[negation])\n'hello123'.match(/[a-zA-Z0-9]+/g) // ['hello123']       (복수 범위)"
          },
          {
            "id": "language-javascript-p09-part-6",
            "title": "수량자[quantifier]",
            "content": "'graaay'.match(/gra*y/)\n'gry'.match(/gra*y/)\n'gray'.match(/gra?y/)\n'gry'.match(/gra?y/)\n'gray'.match(/gra+y/)\n'gry'.match(/gra+y/)\n\n'graaay'.match(/gra{2}y/)\n'graay'.match(/gra{2}y/)\n'graaay'.match(/gra{2,}y/)\n'graaay'.match(/gra{2,3}y/)",
            "displayContent": "/* 수량자[quantifier] */\n'graaay'.match(/gra*y/)    // null   (a*: 0번 이상, y 바로 앞에 없어서 null)\n'gry'.match(/gra*y/)       // ['gry']   (a*: 0번 이상)\n'gray'.match(/gra?y/)      // ['gray']  (a?: 0 또는 1번)\n'gry'.match(/gra?y/)       // ['gry']   (a?: 0 또는 1번)\n'gray'.match(/gra+y/)      // ['gray']  (a+: 1번 이상)\n'gry'.match(/gra+y/)       // null      (a+: 1번 이상, 0번이라 null)\n\n'graaay'.match(/gra{2}y/)   // null     ({2}: 정확히 2번)\n'graay'.match(/gra{2}y/)    // ['graay'] ({2}: 정확히 2번)\n'graaay'.match(/gra{2,}y/)  // ['graaay'] ({2,}: 2번 이상)\n'graaay'.match(/gra{2,3}y/) // ['graaay'] ({2,3}: 2~3번)"
          },
          {
            "id": "language-javascript-p09-part-7",
            "title": "탐욕적[greedy] vs 게으른[lazy] 수량자",
            "content": "'<a><b><c>'.match(/<.+>/)\n'<a><b><c>'.match(/<.+?>/)\n'<a><b><c>'.match(/<.*?>/)",
            "displayContent": "/* 탐욕적[greedy] vs 게으른[lazy] 수량자 */\n'<a><b><c>'.match(/<.+>/)    // ['<a><b><c>'] (greedy: 최대한 매치)\n'<a><b><c>'.match(/<.+?>/)   // ['<a>']       (lazy: 최소한 매치, ? 추가)\n'<a><b><c>'.match(/<.*?>/)   // ['<a>']       (lazy)"
          },
          {
            "id": "language-javascript-p09-part-8",
            "title": "그룹[group]",
            "content": "'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)\n\n'grey'.match(/gr(?:a|e)y/)\n'grey'.match(/gr(a|e)y/)",
            "displayContent": "/* 그룹[group] */\n// (x)    캡처 그룹[capturing group]     - 매치 + 기억\n// (?:x)  비캡처 그룹[non-capturing group] - 매치만, 기억 안함\n// (?<name>x) 네임드 캡처 그룹[named capturing group]\n\n'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)\n// ['2024-03-18', '2024', '03', '18', index:0, ...]\n// [0]=전체, [1]=year, [2]=month, [3]=day\n\n'grey'.match(/gr(?:a|e)y/)   // ['grey'] (비캡처: 그룹 인덱스 없음)\n'grey'.match(/gr(a|e)y/)     // ['grey', 'e'] (캡처: [1]='e')"
          },
          {
            "id": "language-javascript-p09-part-9",
            "title": "네임드 캡처 그룹[named capturing group]",
            "content": "var dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year\ndateMatch.groups.month\ndateMatch.groups.day",
            "displayContent": "// 네임드 캡처 그룹[named capturing group]\nvar dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year    // '2024'\ndateMatch.groups.month   // '03'\ndateMatch.groups.day     // '18'"
          },
          {
            "id": "language-javascript-p09-part-10",
            "title": "역참조[backreference]",
            "content": "'aabbcc'.match(/(.)\\1/)\n'abab'.match(/(ab)\\1/)",
            "displayContent": "/* 역참조[backreference] */\n'aabbcc'.match(/(.)\\1/)   // ['aa', 'a']  (\\1 = 첫 번째 캡처 그룹 재참조)\n'abab'.match(/(ab)\\1/)    // ['abab', 'ab']"
          },
          {
            "id": "language-javascript-p09-part-11",
            "title": "전방탐색[lookahead] / 후방탐색[lookbehind]",
            "content": "'100px 200em 50px'.match(/\\d+(?=px)/g)\n'100px 200em 50px'.match(/\\d+(?!px)/g)\n\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g)\n'$100 £200 $50'.match(/(?<!\\$)\\d+/g)",
            "displayContent": "/* 전방탐색[lookahead] / 후방탐색[lookbehind] */\n// (?=x)  긍정 전방탐색[positive lookahead]  - x 앞에 있는 것\n// (?!x)  부정 전방탐색[negative lookahead]  - x 앞에 없는 것\n// (?<=x) 긍정 후방탐색[positive lookbehind] - x 뒤에 있는 것\n// (?<!x) 부정 후방탐색[negative lookbehind] - x 뒤에 없는 것\n\n'100px 200em 50px'.match(/\\d+(?=px)/g)    // ['100', '50']   (px 앞의 숫자만)\n'100px 200em 50px'.match(/\\d+(?!px)/g)    // ['200', ...] (px 아닌 것 앞의 숫자)\n\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g)      // ['100', '50']   ($ 뒤의 숫자만)\n'$100 £200 $50'.match(/(?<!\\$)\\d+/g)      // ['200']         ($ 아닌 것 뒤의 숫자)"
          },
          {
            "id": "language-javascript-p09-part-12",
            "title": "정규식 메서드[regex methods]",
            "content": "var re1 = /\\d+/g;\nvar str1 = 'abc 123 def 456';\n\nre1.test('abc 123')\nstr1.search(/\\d+/)\nstr1.match(/\\d+/g)\nstr1.replace(/\\d+/g, 'N')",
            "displayContent": "/* 정규식 메서드[regex methods] */\nvar re1 = /\\d+/g;\nvar str1 = 'abc 123 def 456';\n\nre1.test('abc 123')         // true  (패턴 존재 여부[existence])\nstr1.search(/\\d+/)          // 4     (첫 번째 매치 인덱스[index], 없으면 -1)\nstr1.match(/\\d+/g)          // ['123', '456']\nstr1.replace(/\\d+/g, 'N')   // 'abc N def N'"
          },
          {
            "id": "language-javascript-p09-part-13",
            "title": "matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환",
            "content": "var re2 = /(\\d+)/g;\n[...str1.matchAll(re2)].map(m => m[1])\n\n'one1two2three'.split(/\\d/)",
            "displayContent": "// matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환\nvar re2 = /(\\d+)/g;\n[...str1.matchAll(re2)].map(m => m[1])  // ['123', '456']\n\n// split\n'one1two2three'.split(/\\d/)  // ['one', 'two', 'three']"
          },
          {
            "id": "language-javascript-p09-part-14",
            "title": "replace + 캡처 그룹 참조",
            "content": "'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')\n'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>')\n\n'hello'.replace(/(\\w+)/, '[$&]')",
            "displayContent": "/* replace + 캡처 그룹 참조 */\n// $1 $2... = 캡처 그룹[capture group] 번호 참조\n// $<name>  = 네임드 그룹[named group] 참조\n// $&       = 매치 전체[entire match]\n// $`       = 매치 이전[before match]\n// $'       = 매치 이후[after match]\n\n'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'\n'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>') // '18/03/2024'\n\n'hello'.replace(/(\\w+)/, '[$&]')  // '[hello]' ($&: 전체 매치)"
          },
          {
            "id": "language-javascript-p09-part-15",
            "title": "이메일[email] 검증",
            "content": "var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com')\nemailRe.test('invalid@')",
            "displayContent": "// 이메일[email] 검증\nvar emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com')   // true\nemailRe.test('invalid@')           // false"
          },
          {
            "id": "language-javascript-p09-part-16",
            "title": "전화번호[phone number]",
            "content": "var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678')\nphoneRe.test('02.123.4567')",
            "displayContent": "// 전화번호[phone number]\nvar phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678')  // true\nphoneRe.test('02.123.4567')    // true"
          },
          {
            "id": "language-javascript-p09-part-17",
            "title": "날짜[date] YYYY-MM-DD",
            "content": "var dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;\ndateRe.test('2024-03-18')\ndateRe.test('2024-13-01')",
            "displayContent": "// 날짜[date] YYYY-MM-DD\nvar dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;\ndateRe.test('2024-03-18')  // true\ndateRe.test('2024-13-01')  // false"
          },
          {
            "id": "language-javascript-p09-part-18",
            "title": "URL 프로토콜 추출",
            "content": "'https:",
            "displayContent": "// URL 프로토콜 추출\n'https://example.com'.match(/^(https?):\\/\\//)\n// ['https://', 'https']"
          },
          {
            "id": "language-javascript-p09-part-19",
            "title": "단어 경계[word boundary]로 정확히 매치",
            "content": "function hasWord(str, word) {\n  return new RegExp(`\\\\b${word}\\\\b`, 'i').test(str);\n}\nhasWord('Thanks for everything', 'thanks')\nhasWord('Thanksgiving is coming', 'thanks')",
            "displayContent": "// 단어 경계[word boundary]로 정확히 매치\nfunction hasWord(str, word) {\n  return new RegExp(`\\\\b${word}\\\\b`, 'i').test(str);\n}\nhasWord('Thanks for everything', 'thanks')     // true\nhasWord('Thanksgiving is coming', 'thanks')    // false"
          }
        ]
      },
      {
        "id": "language-javascript-p10-proxy-reflect",
        "title": "P10.Proxy-Reflect",
        "fileName": "P10.Proxy-Reflect.yaml",
        "sourcePath": "assets/raw/syntax/javascript/P10.Proxy-Reflect.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-p10-proxy-reflect-part-1",
            "title": "handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)",
            "content": "var emptyProxy = new Proxy({ a: 1 }, {});\nemptyProxy.a",
            "displayContent": "// handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)\n\nvar emptyProxy = new Proxy({ a: 1 }, {});\nemptyProxy.a   // 1  (트랩 없음 → target에 그대로 전달[passthrough])"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-2",
            "title": "get 트랩[get trap] - 속성 읽기[property access] 가로채기",
            "content": "var getTarget = { name: 'kim', age: 30 };\nvar getProxy = new Proxy(getTarget, {\n  get(target, prop, receiver) {",
            "displayContent": "/* get 트랩[get trap] - 속성 읽기[property access] 가로채기 */\nvar getTarget = { name: 'kim', age: 30 };\nvar getProxy = new Proxy(getTarget, {\n  get(target, prop, receiver) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-3",
            "title": "prop이 없으면 기본값[default value] 반환",
            "content": "    return prop in target ? Reflect.get(target, prop, receiver) : `[${prop} 없음]`;\n  }\n});\ngetProxy.name\ngetProxy.job",
            "displayContent": "    // prop이 없으면 기본값[default value] 반환\n    return prop in target ? Reflect.get(target, prop, receiver) : `[${prop} 없음]`;\n  }\n});\ngetProxy.name    // 'kim'\ngetProxy.job     // '[job 없음]'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-4",
            "title": "set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기",
            "content": "var setProxy = new Proxy({}, {\n  set(target, prop, value, receiver) {",
            "displayContent": "/* set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기 */\nvar setProxy = new Proxy({}, {\n  set(target, prop, value, receiver) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-5",
            "title": "유효성 검사[validation]: age는 양수 정수만 허용",
            "content": "    if (prop === 'age') {\n      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {\n        throw new TypeError(`age는 양수 정수[positive integer]여야 합니다`);\n      }\n    }\n    return Reflect.set(target, prop, value, receiver);\n  }\n});\nsetProxy.name = 'lee';\nsetProxy.age = 25;",
            "displayContent": "    // 유효성 검사[validation]: age는 양수 정수만 허용\n    if (prop === 'age') {\n      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {\n        throw new TypeError(`age는 양수 정수[positive integer]여야 합니다`);\n      }\n    }\n    return Reflect.set(target, prop, value, receiver);  // 기본 동작 수행\n  }\n});\nsetProxy.name = 'lee';   // 'lee'\nsetProxy.age = 25;       // 25\n// setProxy.age = -1;    // ❌ TypeError 발생"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-6",
            "title": "has 트랩[has trap] - in 연산자[in operator] 가로채기",
            "content": "var rangeProxy = new Proxy({ min: 1, max: 100 }, {\n  has(target, prop) {",
            "displayContent": "/* has 트랩[has trap] - in 연산자[in operator] 가로채기 */\nvar rangeProxy = new Proxy({ min: 1, max: 100 }, {\n  has(target, prop) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-7",
            "title": "숫자면 범위 안에 있는지 확인[range check]",
            "content": "    var num = Number(prop);\n    if (!isNaN(num)) return num >= target.min && num <= target.max;\n    return prop in target;\n  }\n});\n50  in rangeProxy\n150 in rangeProxy\n'min' in rangeProxy",
            "displayContent": "    // 숫자면 범위 안에 있는지 확인[range check]\n    var num = Number(prop);\n    if (!isNaN(num)) return num >= target.min && num <= target.max;\n    return prop in target;\n  }\n});\n50  in rangeProxy   // true  (범위 내)\n150 in rangeProxy   // false (범위 밖)\n'min' in rangeProxy // true  (속성 존재)"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-8",
            "title": "deleteProperty 트랩 - delete 연산자[delete operator] 가로채기",
            "content": "var deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {\n  deleteProperty(target, prop) {",
            "displayContent": "/* deleteProperty 트랩 - delete 연산자[delete operator] 가로채기 */\nvar deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {\n  deleteProperty(target, prop) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-9",
            "title": "_ 로 시작하는 속성은 삭제 금지[deletion forbidden]",
            "content": "    if (prop.startsWith('_')) {\n      throw new Error(`프라이빗 속성[private property] '${prop}'은 삭제 불가`);\n    }\n    return Reflect.deleteProperty(target, prop);\n  }\n});\ndelete deleteProxy.pub",
            "displayContent": "    // _ 로 시작하는 속성은 삭제 금지[deletion forbidden]\n    if (prop.startsWith('_')) {\n      throw new Error(`프라이빗 속성[private property] '${prop}'은 삭제 불가`);\n    }\n    return Reflect.deleteProperty(target, prop);\n  }\n});\ndelete deleteProxy.pub    // true"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-10",
            "title": "apply 트랩[apply trap] - 함수 호출[function call] 가로채기",
            "content": "function multiply(a, b) { return a * b; }\n\nvar applyProxy = new Proxy(multiply, {\n  apply(target, thisArg, args) {\n    console.log(`호출[call]: multiply(${args})`);\n    return Reflect.apply(target, thisArg, args);\n  }\n});\napplyProxy(3, 4)",
            "displayContent": "/* apply 트랩[apply trap] - 함수 호출[function call] 가로채기 */\nfunction multiply(a, b) { return a * b; }\n\nvar applyProxy = new Proxy(multiply, {\n  apply(target, thisArg, args) {\n    console.log(`호출[call]: multiply(${args})`);  // 로깅[logging]\n    return Reflect.apply(target, thisArg, args);\n  }\n});\napplyProxy(3, 4)   // 로그: '호출[call]: multiply(3,4)', 반환: 12"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-11",
            "title": "construct 트랩[construct trap] - new 연산자[new operator] 가로채기",
            "content": "function Person(name) { this.name = name; }\n\nvar constructProxy = new Proxy(Person, {\n  construct(target, args, newTarget) {\n    console.log(`인스턴스 생성[instantiation]: ${args[0]}`);\n    var instance = Reflect.construct(target, args, newTarget);\n    instance.createdAt = new Date().toISOString().slice(0, 10);\n    return instance;\n  }\n});\nvar p1 = new constructProxy('kim');\np1.name\np1.createdAt",
            "displayContent": "/* construct 트랩[construct trap] - new 연산자[new operator] 가로채기 */\nfunction Person(name) { this.name = name; }\n\nvar constructProxy = new Proxy(Person, {\n  construct(target, args, newTarget) {\n    console.log(`인스턴스 생성[instantiation]: ${args[0]}`);\n    var instance = Reflect.construct(target, args, newTarget);\n    instance.createdAt = new Date().toISOString().slice(0, 10);\n    return instance;\n  }\n});\nvar p1 = new constructProxy('kim');\np1.name       // 'kim'\np1.createdAt  // '2026-03-18'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-12",
            "title": "ownKeys 트랩 - Object.keys / for...in 가로채기",
            "content": "var ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {\n  ownKeys(target) {",
            "displayContent": "/* ownKeys 트랩 - Object.keys / for...in 가로채기 */\nvar ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {\n  ownKeys(target) {"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-13",
            "title": "_ 로 시작하는 키[key] 숨기기",
            "content": "    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));\n  }\n});\nObject.keys(ownKeysProxy)",
            "displayContent": "    // _ 로 시작하는 키[key] 숨기기\n    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));\n  }\n});\nObject.keys(ownKeysProxy)    // ['pub', 'normal']  (_priv 숨겨짐)"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-14",
            "title": "활용 패턴 1 - 읽기 전용[read-only] 객체",
            "content": "function readOnly(obj) {\n  return new Proxy(obj, {\n    set(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 수정 불가`);\n    },\n    deleteProperty(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 삭제 불가`);\n    }\n  });\n}\nvar frozenConfig = readOnly({ host: 'localhost', port: 3000 });\nfrozenConfig.host",
            "displayContent": "/* 활용 패턴 1 - 읽기 전용[read-only] 객체 */\nfunction readOnly(obj) {\n  return new Proxy(obj, {\n    set(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 수정 불가`);\n    },\n    deleteProperty(target, prop) {\n      throw new Error(`읽기 전용[read-only]: '${prop}' 삭제 불가`);\n    }\n  });\n}\nvar frozenConfig = readOnly({ host: 'localhost', port: 3000 });\nfrozenConfig.host        // 'localhost'\n// frozenConfig.host = 'x'; // ❌ Error 발생"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-15",
            "title": "활용 패턴 2 - 기본값[default value] 제공",
            "content": "function withDefaults(target, defaults) {\n  return new Proxy(target, {\n    get(obj, prop) {\n      return prop in obj ? obj[prop] : defaults[prop];\n    }\n  });\n}\nvar settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });\nsettings.theme\nsettings.lang\nsettings.fontSize",
            "displayContent": "/* 활용 패턴 2 - 기본값[default value] 제공 */\nfunction withDefaults(target, defaults) {\n  return new Proxy(target, {\n    get(obj, prop) {\n      return prop in obj ? obj[prop] : defaults[prop];\n    }\n  });\n}\nvar settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });\nsettings.theme     // 'dark'  (직접 설정값 우선)\nsettings.lang      // 'ko'    (기본값[default])\nsettings.fontSize  // 14      (기본값[default])"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-16",
            "title": "활용 패턴 3 - 관찰자[observable] / 반응형[reactive]",
            "content": "function observable(obj, onChange) {\n  return new Proxy(obj, {\n    set(target, prop, value, receiver) {\n      var oldValue = target[prop];\n      var result = Reflect.set(target, prop, value, receiver);\n      if (oldValue !== value) onChange(prop, oldValue, value);\n      return result;\n    }\n  });\n}\nvar state = observable({ count: 0 }, (prop, oldVal, newVal) => {\n  console.log(`${prop}: ${oldVal} → ${newVal}`);\n});\nstate.count = 1;\nstate.count = 5;",
            "displayContent": "/* 활용 패턴 3 - 관찰자[observable] / 반응형[reactive] */\nfunction observable(obj, onChange) {\n  return new Proxy(obj, {\n    set(target, prop, value, receiver) {\n      var oldValue = target[prop];\n      var result = Reflect.set(target, prop, value, receiver);\n      if (oldValue !== value) onChange(prop, oldValue, value);  // 변경 알림[notify change]\n      return result;\n    }\n  });\n}\nvar state = observable({ count: 0 }, (prop, oldVal, newVal) => {\n  console.log(`${prop}: ${oldVal} → ${newVal}`);\n});\nstate.count = 1;   // 'count: 0 → 1'\nstate.count = 5;   // 'count: 1 → 5'"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-17",
            "title": "Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용",
            "content": "var refObj = { x: 1 };\n\nReflect.get(refObj, 'x')\nReflect.set(refObj, 'y', 2)\nReflect.has(refObj, 'x')\nReflect.deleteProperty(refObj, 'x')\nReflect.ownKeys(refObj)",
            "displayContent": "// Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용\n\nvar refObj = { x: 1 };\n\nReflect.get(refObj, 'x')             // 1     (refObj.x 와 동일)\nReflect.set(refObj, 'y', 2)          // true  (refObj.y = 2 와 동일)\nReflect.has(refObj, 'x')             // true  ('x' in refObj 와 동일)\nReflect.deleteProperty(refObj, 'x')  // true  (delete refObj.x 와 동일)\nReflect.ownKeys(refObj)              // ['y']"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-18",
            "title": "Reflect.apply - 함수 호출[function invocation]",
            "content": "Reflect.apply(Math.max, null, [1, 2, 3])",
            "displayContent": "// Reflect.apply - 함수 호출[function invocation]\nReflect.apply(Math.max, null, [1, 2, 3])  // 3"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-19",
            "title": "Reflect.construct - new 호출[constructor call]",
            "content": "function Point(x, y) { this.x = x; this.y = y; }\nvar pt = Reflect.construct(Point, [3, 4]);\npt.x\npt.y",
            "displayContent": "// Reflect.construct - new 호출[constructor call]\nfunction Point(x, y) { this.x = x; this.y = y; }\nvar pt = Reflect.construct(Point, [3, 4]);\npt.x  // 3\npt.y  // 4"
          },
          {
            "id": "language-javascript-p10-proxy-reflect-part-20",
            "title": "Proxy 취소[revocable proxy]",
            "content": "var revocable = Proxy.revocable({ data: 42 }, {\n  get(target, prop) { return Reflect.get(target, prop); }\n});\nvar revProxy = revocable.proxy;\nvar revoke = revocable.revoke;\n\nrevProxy.data\nrevoke();",
            "displayContent": "/* Proxy 취소[revocable proxy] */\nvar revocable = Proxy.revocable({ data: 42 }, {\n  get(target, prop) { return Reflect.get(target, prop); }\n});\nvar revProxy = revocable.proxy;\nvar revoke = revocable.revoke;\n\nrevProxy.data  // 42\nrevoke();      // 프록시 비활성화[deactivate]\n// revProxy.data  // ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked"
          }
        ]
      }
    ]
  },
  {
    "id": "javascript-es6",
    "label": "JavaScript ES6",
    "folderName": "javascript-es6",
    "lessons": [
      {
        "id": "language-javascript-es6-p01",
        "title": "P01.기본-문법",
        "fileName": "P01.기본-문법.yaml",
        "sourcePath": "assets/raw/syntax/javascript-es6/P01.기본-문법.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-es6-p01-part-1",
            "title": "상수[const]",
            "content": "const PI = 3.141593;\nconst user = { name: \"kim\" };\nuser.name = \"lee\";\nconsole.log(PI > 3.0, user.name);",
            "displayContent": "// 상수[const] — 재할당[reassignment] 불가, 객체 속성[property]은 변경 가능\nconst PI = 3.141593;\nconst user = { name: \"kim\" };\nuser.name = \"lee\";\nconsole.log(PI > 3.0, user.name);\n// 결과: true lee"
          },
          {
            "id": "language-javascript-es6-p01-part-2",
            "title": "블록 스코프[let]",
            "content": "let total = 0;\nfor (let i = 0; i < 3; i++) {\n  total += i;\n}\nconsole.log(total);",
            "displayContent": "// 블록 스코프[block scope] — let은 블록 밖 접근 불가\nlet total = 0;\nfor (let i = 0; i < 3; i++) {\n  total += i;\n}\nconsole.log(total);\n// 결과: 3"
          },
          {
            "id": "language-javascript-es6-p01-part-3",
            "title": "let 콜백 캡처[closure]",
            "content": "const callbacks = [];\nfor (let i = 0; i <= 2; i++) {\n  callbacks[i] = () => i * 2;\n}\nconsole.log(callbacks[0](), callbacks[1](), callbacks[2]());",
            "displayContent": "// let 콜백 캡처[closure] — 반복마다 새 바인딩[binding]\nconst callbacks = [];\nfor (let i = 0; i <= 2; i++) {\n  callbacks[i] = () => i * 2;\n}\nconsole.log(callbacks[0](), callbacks[1](), callbacks[2]());\n// 결과: 0 2 4"
          },
          {
            "id": "language-javascript-es6-p01-part-4",
            "title": "화살표 함수[arrow function]",
            "content": "const odds = [1, 2, 3, 4].filter((n) => n % 2 === 1);\nconst doubled = odds.map((v) => v * 2);\nconsole.log(odds, doubled);",
            "displayContent": "// 화살표 함수[arrow function] — 암묵적 반환[implicit return]\nconst odds = [1, 2, 3, 4].filter((n) => n % 2 === 1);\nconst doubled = odds.map((v) => v * 2);\nconsole.log(odds, doubled);\n// 결과: [1, 3] [2, 6]"
          },
          {
            "id": "language-javascript-es6-p01-part-5",
            "title": "화살표 this[lexical this]",
            "content": "const counter = {\n  count: 0,\n  bump() {\n    const inc = () => {\n      this.count += 1;\n    };\n    inc();\n  },\n};\ncounter.bump();\nconsole.log(counter.count);",
            "displayContent": "// 화살표 this[lexical this] — 바깥 this를 캡처한다\nconst counter = {\n  count: 0,\n  bump() {\n    const inc = () => {\n      this.count += 1;\n    };\n    inc();\n  },\n};\ncounter.bump();\nconsole.log(counter.count);\n// 결과: 1"
          },
          {
            "id": "language-javascript-es6-p01-part-6",
            "title": "기본 매개변수[default parameter]",
            "content": "function greet(name = \"guest\", msg = \"hi\") {\n  return `${msg}, ${name}`;\n}\nconsole.log(greet(), greet(\"kim\", \"hello\"));",
            "displayContent": "// 기본 매개변수[default parameter]\nfunction greet(name = \"guest\", msg = \"hi\") {\n  return `${msg}, ${name}`;\n}\nconsole.log(greet(), greet(\"kim\", \"hello\"));\n// 결과: hi, guest / hello, kim"
          },
          {
            "id": "language-javascript-es6-p01-part-7",
            "title": "Rest 매개변수[rest parameter]",
            "content": "function sum(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nconsole.log(sum(1, 2, 3, 4));",
            "displayContent": "// Rest 매개변수[rest parameter] — 나머지 인자를 배열로 모은다\nfunction sum(first, ...rest) {\n  return rest.reduce((acc, n) => acc + n, first);\n}\nconsole.log(sum(1, 2, 3, 4));\n// 결과: 10"
          },
          {
            "id": "language-javascript-es6-p01-part-8",
            "title": "스프레드[spread] 배열",
            "content": "const base = [1, 2];\nconst merged = [...base, 3, ...[4, 5]];\nconsole.log(merged);",
            "displayContent": "// 스프레드[spread] 배열 — 펼쳐서 복사·병합\nconst base = [1, 2];\nconst merged = [...base, 3, ...[4, 5]];\nconsole.log(merged);\n// 결과: [1, 2, 3, 4, 5]"
          },
          {
            "id": "language-javascript-es6-p01-part-9",
            "title": "스프레드[spread] 객체",
            "content": "const a = { x: 1, y: 2 };\nconst b = { y: 9, z: 3 };\nconst merged = { ...a, ...b };\nconsole.log(merged);",
            "displayContent": "// 스프레드[spread] 객체 — 나중 키가 우선[last-wins]\nconst a = { x: 1, y: 2 };\nconst b = { y: 9, z: 3 };\nconst merged = { ...a, ...b };\nconsole.log(merged);\n// 결과: { x: 1, y: 9, z: 3 }"
          },
          {
            "id": "language-javascript-es6-p01-part-10",
            "title": "템플릿 리터럴[template literal]",
            "content": "const name = \"kim\";\nconst score = 95;\nconst line = `이름: ${name}, 점수: ${score}`;\nconsole.log(line);",
            "displayContent": "// 템플릿 리터럴[template literal] — 보간[interpolation] + 멀티라인\nconst name = \"kim\";\nconst score = 95;\nconst line = `이름: ${name}, 점수: ${score}`;\nconsole.log(line);\n// 결과: 이름: kim, 점수: 95"
          },
          {
            "id": "language-javascript-es6-p01-part-11",
            "title": "객체 단축[shorthand] / 메서드",
            "content": "const name = \"lee\";\nconst age = 30;\nconst user = {\n  name,\n  age,\n  greet() {\n    return `hi ${this.name}`;\n  },\n};\nconsole.log(user.greet(), user.age);",
            "displayContent": "// 객체 단축[shorthand property] / 메서드 정의[method definition]\nconst name = \"lee\";\nconst age = 30;\nconst user = {\n  name,\n  age,\n  greet() {\n    return `hi ${this.name}`;\n  },\n};\nconsole.log(user.greet(), user.age);\n// 결과: hi lee 30"
          },
          {
            "id": "language-javascript-es6-p01-part-12",
            "title": "계산된 속성명[computed property]",
            "content": "const key = \"item\";\nconst bag = {\n  [key + \"1\"]: \"a\",\n  [key + \"2\"]: \"b\",\n};\nconsole.log(bag.item1, bag.item2);",
            "displayContent": "// 계산된 속성명[computed property name]\nconst key = \"item\";\nconst bag = {\n  [key + \"1\"]: \"a\",\n  [key + \"2\"]: \"b\",\n};\nconsole.log(bag.item1, bag.item2);\n// 결과: a b"
          },
          {
            "id": "language-javascript-es6-p01-part-13",
            "title": "배열 구조분해[array destructuring]",
            "content": "const [first, second] = [10, 20];\nconst [head, ...tail] = [1, 2, 3];\nconsole.log(first, second, head, tail);",
            "displayContent": "// 배열 구조분해[array destructuring]\nconst [first, second] = [10, 20];\nconst [head, ...tail] = [1, 2, 3];\nconsole.log(first, second, head, tail);\n// 결과: 10 20 1 [2, 3]"
          },
          {
            "id": "language-javascript-es6-p01-part-14",
            "title": "객체 구조분해[object destructuring]",
            "content": "const { name: userName, role = \"user\" } = { name: \"kim\" };\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(userName, role, a, rest);",
            "displayContent": "// 객체 구조분해[object destructuring] — 별칭[alias]·기본값[default]\nconst { name: userName, role = \"user\" } = { name: \"kim\" };\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(userName, role, a, rest);\n// 결과: kim user 1 { b: 2, c: 3 }"
          },
          {
            "id": "language-javascript-es6-p01-part-15",
            "title": "파라미터 구조분해[parameter destructuring]",
            "content": "function showUser({ name, role = \"user\" }) {\n  return `${name}(${role})`;\n}\nconsole.log(showUser({ name: \"kim\" }));",
            "displayContent": "// 파라미터 구조분해[parameter destructuring]\nfunction showUser({ name, role = \"user\" }) {\n  return `${name}(${role})`;\n}\nconsole.log(showUser({ name: \"kim\" }));\n// 결과: kim(user)"
          }
        ]
      },
      {
        "id": "language-javascript-es6-p02",
        "title": "P02.모듈-클래스-컬렉션",
        "fileName": "P02.모듈-클래스-컬렉션.yaml",
        "sourcePath": "assets/raw/syntax/javascript-es6/P02.모듈-클래스-컬렉션.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-es6-p02-part-1",
            "title": "이름 있는 내보내기[named export]",
            "content": "export const API_URL = \"/api\";\nexport function add(a, b) {\n  return a + b;\n}\nexport class User {\n  constructor(name) {\n    this.name = name;\n  }\n}",
            "displayContent": "// 이름 있는 내보내기[named export]\nexport const API_URL = \"/api\";\nexport function add(a, b) {\n  return a + b;\n}\nexport class User {\n  constructor(name) {\n    this.name = name;\n  }\n}"
          },
          {
            "id": "language-javascript-es6-p02-part-2",
            "title": "기본 내보내기[default export]",
            "content": "export default function fetchUser(id) {\n  return { id, name: \"kim\" };\n}",
            "displayContent": "// 기본 내보내기[default export] — 모듈당 하나\nexport default function fetchUser(id) {\n  return { id, name: \"kim\" };\n}"
          },
          {
            "id": "language-javascript-es6-p02-part-3",
            "title": "가져오기[import]",
            "content": "import fetchUser from \"./user.js\";\nimport { API_URL, add as sum } from \"./math.js\";\nimport * as math from \"./math.js\";\nconsole.log(API_URL, sum(1, 2), math.add(3, 4));",
            "displayContent": "// 가져오기[import] — 이름·기본·별칭[alias]\nimport fetchUser from \"./user.js\";\nimport { API_URL, add as sum } from \"./math.js\";\nimport * as math from \"./math.js\";\nconsole.log(API_URL, sum(1, 2), math.add(3, 4));"
          },
          {
            "id": "language-javascript-es6-p02-part-4",
            "title": "기본 클래스[class]",
            "content": "class Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  area() {\n    return Math.PI * this.radius ** 2;\n  }\n}\nconst c = new Circle(5);\nconsole.log(c.area().toFixed(2));",
            "displayContent": "// 기본 클래스[class]\nclass Circle {\n  constructor(radius) {\n    this.radius = radius;\n  }\n  area() {\n    return Math.PI * this.radius ** 2;\n  }\n}\nconst c = new Circle(5);\nconsole.log(c.area().toFixed(2));\n// 결과: 78.54"
          },
          {
            "id": "language-javascript-es6-p02-part-5",
            "title": "상속[extends] / super",
            "content": "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() {\n    return `${super.speak()} — woof`;\n  }\n}\nconsole.log(new Dog(\"Rex\", \"beagle\").speak());",
            "displayContent": "// 상속[extends] / super\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() {\n    return `${super.speak()} — woof`;\n  }\n}\nconsole.log(new Dog(\"Rex\", \"beagle\").speak());\n// 결과: Rex makes a sound — woof"
          },
          {
            "id": "language-javascript-es6-p02-part-6",
            "title": "static / getter",
            "content": "class Rect {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() {\n    return this.w * this.h;\n  }\n  static square(n) {\n    return new Rect(n, n);\n  }\n}\nconst box = Rect.square(4);\nconsole.log(box.area);",
            "displayContent": "// static / getter\nclass Rect {\n  constructor(w, h) {\n    this.w = w;\n    this.h = h;\n  }\n  get area() {\n    return this.w * this.h;\n  }\n  static square(n) {\n    return new Rect(n, n);\n  }\n}\nconst box = Rect.square(4);\nconsole.log(box.area);\n// 결과: 16"
          },
          {
            "id": "language-javascript-es6-p02-part-7",
            "title": "Map",
            "content": "const store = new Map();\nstore.set(\"name\", \"kim\");\nstore.set(1, \"one\");\nconsole.log(store.get(\"name\"), store.has(1), store.size);",
            "displayContent": "// Map — 키 타입[key type] 제한 없음\nconst store = new Map();\nstore.set(\"name\", \"kim\");\nstore.set(1, \"one\");\nconsole.log(store.get(\"name\"), store.has(1), store.size);\n// 결과: kim true 2"
          },
          {
            "id": "language-javascript-es6-p02-part-8",
            "title": "Map 순회[iteration]",
            "content": "const scores = new Map([\n  [\"kim\", 90],\n  [\"lee\", 80],\n]);\nfor (const [name, score] of scores) {\n  console.log(name, score);\n}",
            "displayContent": "// Map 순회[iteration]\nconst scores = new Map([\n  [\"kim\", 90],\n  [\"lee\", 80],\n]);\nfor (const [name, score] of scores) {\n  console.log(name, score);\n}\n// 결과: kim 90 / lee 80"
          },
          {
            "id": "language-javascript-es6-p02-part-9",
            "title": "Set",
            "content": "const tags = new Set([\"js\", \"ts\", \"js\"]);\ntags.add(\"go\");\nconsole.log(tags.has(\"js\"), tags.size, [...tags]);",
            "displayContent": "// Set — 중복 없는 값 집합[unique values]\nconst tags = new Set([\"js\", \"ts\", \"js\"]);\ntags.add(\"go\");\nconsole.log(tags.has(\"js\"), tags.size, [...tags]);\n// 결과: true 3 [\"js\", \"ts\", \"go\"]"
          },
          {
            "id": "language-javascript-es6-p02-part-10",
            "title": "WeakMap / WeakSet",
            "content": "const meta = new WeakMap();\nconst seen = new WeakSet();\nconst obj = { id: 1 };\nmeta.set(obj, \"cached\");\nseen.add(obj);\nconsole.log(meta.get(obj), seen.has(obj));",
            "displayContent": "// WeakMap / WeakSet — 객체 키만, GC에 방해 안 됨\nconst meta = new WeakMap();\nconst seen = new WeakSet();\nconst obj = { id: 1 };\nmeta.set(obj, \"cached\");\nseen.add(obj);\nconsole.log(meta.get(obj), seen.has(obj));\n// 결과: cached true"
          },
          {
            "id": "language-javascript-es6-p02-part-11",
            "title": "Promise then / catch",
            "content": "Promise.resolve(1)\n  .then((v) => v + 1)\n  .then((v) => {\n    console.log(v);\n    return v;\n  })\n  .catch((e) => console.error(e.message));",
            "displayContent": "// Promise then / catch\nPromise.resolve(1)\n  .then((v) => v + 1)\n  .then((v) => {\n    console.log(v);\n    return v;\n  })\n  .catch((e) => console.error(e.message));\n// 결과: 2"
          },
          {
            "id": "language-javascript-es6-p02-part-12",
            "title": "Promise.all",
            "content": "Promise.all([Promise.resolve(1), Promise.resolve(2)]).then((values) => {\n  console.log(values);\n});",
            "displayContent": "// Promise.all — 전체 성공 대기[wait for all]\nPromise.all([Promise.resolve(1), Promise.resolve(2)]).then((values) => {\n  console.log(values);\n});\n// 결과: [1, 2]"
          }
        ]
      },
      {
        "id": "language-javascript-es6-p03",
        "title": "P03.심화-내장API",
        "fileName": "P03.심화-내장API.yaml",
        "sourcePath": "assets/raw/syntax/javascript-es6/P03.심화-내장API.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-javascript-es6-p03-part-1",
            "title": "심볼[Symbol]",
            "content": "const id = Symbol(\"id\");\nconst user = { name: \"kim\", [id]: 7 };\nconsole.log(user[id], Symbol(\"id\") === id);",
            "displayContent": "// 심볼[Symbol] — 고유 키[unique key]\nconst id = Symbol(\"id\");\nconst user = { name: \"kim\", [id]: 7 };\nconsole.log(user[id], Symbol(\"id\") === id);\n// 결과: 7 false"
          },
          {
            "id": "language-javascript-es6-p03-part-2",
            "title": "for...of",
            "content": "for (const ch of \"hi\") {\n  console.log(ch);\n}\nfor (const n of [10, 20]) {\n  console.log(n);\n}",
            "displayContent": "// for...of — 이터러블[iterable] 순회\nfor (const ch of \"hi\") {\n  console.log(ch);\n}\nfor (const n of [10, 20]) {\n  console.log(n);\n}\n// 결과: h i / 10 20"
          },
          {
            "id": "language-javascript-es6-p03-part-3",
            "title": "제너레이터[generator]",
            "content": "function* range(start, end) {\n  for (let i = start; i <= end; i++) yield i;\n}\nconsole.log([...range(1, 3)]);",
            "displayContent": "// 제너레이터[generator] — function* + yield\nfunction* range(start, end) {\n  for (let i = start; i <= end; i++) yield i;\n}\nconsole.log([...range(1, 3)]);\n// 결과: [1, 2, 3]"
          },
          {
            "id": "language-javascript-es6-p03-part-4",
            "title": "Object.assign",
            "content": "const target = { a: 1 };\nObject.assign(target, { b: 2 }, { c: 3 });\nconst clone = Object.assign({}, target);\nconsole.log(target, clone);",
            "displayContent": "// Object.assign — 얕은 병합[shallow merge]\nconst target = { a: 1 };\nObject.assign(target, { b: 2 }, { c: 3 });\nconst clone = Object.assign({}, target);\nconsole.log(target, clone);\n// 결과: { a:1, b:2, c:3 } (둘 다 동일 형태)"
          },
          {
            "id": "language-javascript-es6-p03-part-5",
            "title": "Array.from / find",
            "content": "const chars = Array.from(\"ABC\");\nconst found = [1, 2, 3, 4].find((n) => n > 2);\nconst idx = [1, 2, 3, 4].findIndex((n) => n > 2);\nconsole.log(chars, found, idx);",
            "displayContent": "// Array.from / find\nconst chars = Array.from(\"ABC\");\nconst found = [1, 2, 3, 4].find((n) => n > 2);\nconst idx = [1, 2, 3, 4].findIndex((n) => n > 2);\nconsole.log(chars, found, idx);\n// 결과: [\"A\",\"B\",\"C\"] 3 2"
          },
          {
            "id": "language-javascript-es6-p03-part-6",
            "title": "Array.includes / fill",
            "content": "console.log([10, 20, 30].includes(20));\nconsole.log([0, 0, 0].fill(7));",
            "displayContent": "// Array.includes / fill\nconsole.log([10, 20, 30].includes(20));\nconsole.log([0, 0, 0].fill(7));\n// 결과: true / [7, 7, 7]"
          },
          {
            "id": "language-javascript-es6-p03-part-7",
            "title": "String.includes / startsWith",
            "content": "const text = \"Hello, World!\";\nconsole.log(text.includes(\"World\"), text.startsWith(\"Hello\"), text.endsWith(\"!\"));",
            "displayContent": "// String.includes / startsWith / endsWith\nconst text = \"Hello, World!\";\nconsole.log(text.includes(\"World\"), text.startsWith(\"Hello\"), text.endsWith(\"!\"));\n// 결과: true true true"
          },
          {
            "id": "language-javascript-es6-p03-part-8",
            "title": "String.repeat / String.raw",
            "content": "console.log(\"ab\".repeat(3));\nconsole.log(String.raw`C:\\Users\\name`);",
            "displayContent": "// String.repeat / String.raw — 이스케이프 비처리[raw string]\nconsole.log(\"ab\".repeat(3));\nconsole.log(String.raw`C:\\Users\\name`);\n// 결과: ababab / C:\\Users\\name"
          },
          {
            "id": "language-javascript-es6-p03-part-9",
            "title": "Number.isNaN / isFinite",
            "content": "console.log(Number.isNaN(NaN), Number.isNaN(\"NaN\"));\nconsole.log(Number.isFinite(10), Number.isFinite(Infinity));",
            "displayContent": "// Number.isNaN / isFinite — 전역 isNaN보다 안전\nconsole.log(Number.isNaN(NaN), Number.isNaN(\"NaN\"));\nconsole.log(Number.isFinite(10), Number.isFinite(Infinity));\n// 결과: true false / true false"
          },
          {
            "id": "language-javascript-es6-p03-part-10",
            "title": "2진수·8진수 리터럴[binary octal]",
            "content": "console.log(0b1010, 0o755);",
            "displayContent": "// 2진수·8진수 리터럴[binary / octal literal]\nconsole.log(0b1010, 0o755);\n// 결과: 10 493"
          },
          {
            "id": "language-javascript-es6-p03-part-11",
            "title": "Object.keys / entries",
            "content": "const sample = { a: 1, b: 2 };\nconsole.log(Object.keys(sample));\nconsole.log(Object.values(sample));\nconsole.log(Object.entries(sample));",
            "displayContent": "// Object.keys / values / entries\nconst sample = { a: 1, b: 2 };\nconsole.log(Object.keys(sample));\nconsole.log(Object.values(sample));\nconsole.log(Object.entries(sample));\n// 결과: [\"a\",\"b\"] / [1,2] / [[\"a\",1],[\"b\",2]]"
          }
        ]
      }
    ]
  },
  {
    "id": "lodash",
    "label": "Lodash",
    "folderName": "lodash",
    "lessons": [
      {
        "id": "language-lodash-p01",
        "title": "P01.핵심-메서드",
        "fileName": "P01.핵심-메서드.yaml",
        "sourcePath": "assets/raw/syntax/lodash/P01.핵심-메서드.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-lodash-p01-part-1",
            "title": "청크[chunk]",
            "content": "import _ from \"lodash\";\n\nconst pages = _.chunk([1, 2, 3, 4, 5], 2);",
            "displayContent": "// 청크[chunk] — 배열을 고정 길이 묶음으로 나눔\nimport _ from \"lodash\";\n\nconst pages = _.chunk([1, 2, 3, 4, 5], 2);\n// 결과: [[1,2],[3,4],[5]]"
          },
          {
            "id": "language-lodash-p01-part-2",
            "title": "빈값 제거[compact]",
            "content": "import _ from \"lodash\";\n\nconst clean = _.compact([0, 1, false, 2, \"\", 3, null]);",
            "displayContent": "// 빈값 제거[compact] — falsy(false, null, 0, \"\", undefined, NaN) 제거\nimport _ from \"lodash\";\n\nconst clean = _.compact([0, 1, false, 2, \"\", 3, null]);\n// 결과: [1, 2, 3]"
          },
          {
            "id": "language-lodash-p01-part-3",
            "title": "안전 조회[get]",
            "content": "import _ from \"lodash\";\n\nconst user = { profile: { name: \"kim\" } };\nconst name = _.get(user, \"profile.name\", \"guest\");\nconst city = _.get(user, \"profile.city\", \"unknown\");",
            "displayContent": "// 안전 조회[get] — 중첩 경로 + 기본값[default]\nimport _ from \"lodash\";\n\nconst user = { profile: { name: \"kim\" } };\nconst name = _.get(user, \"profile.name\", \"guest\");\nconst city = _.get(user, \"profile.city\", \"unknown\");\n// 결과: name=\"kim\", city=\"unknown\""
          },
          {
            "id": "language-lodash-p01-part-4",
            "title": "경로 설정[set]",
            "content": "import _ from \"lodash\";\n\nconst draft = {};\n_.set(draft, \"profile.city\", \"seoul\");",
            "displayContent": "// 경로 설정[set] — 중간 객체가 없으면 만들어 둠\nimport _ from \"lodash\";\n\nconst draft = {};\n_.set(draft, \"profile.city\", \"seoul\");\n// 결과: { profile: { city: \"seoul\" } }"
          },
          {
            "id": "language-lodash-p01-part-5",
            "title": "일부만 뽑기[pick]",
            "content": "import _ from \"lodash\";\n\nconst user = { id: 1, name: \"kim\", password: \"secret\", role: \"admin\" };\nconst publicUser = _.pick(user, [\"id\", \"name\", \"role\"]);",
            "displayContent": "// 일부만 뽑기[pick]\nimport _ from \"lodash\";\n\nconst user = { id: 1, name: \"kim\", password: \"secret\", role: \"admin\" };\nconst publicUser = _.pick(user, [\"id\", \"name\", \"role\"]);\n// 결과: { id: 1, name: \"kim\", role: \"admin\" }"
          },
          {
            "id": "language-lodash-p01-part-6",
            "title": "일부 제외[omit]",
            "content": "import _ from \"lodash\";\n\nconst user = { id: 1, name: \"kim\", password: \"secret\" };\nconst safe = _.omit(user, [\"password\"]);",
            "displayContent": "// 일부 제외[omit] — 민감 필드 제거에 자주 씀\nimport _ from \"lodash\";\n\nconst user = { id: 1, name: \"kim\", password: \"secret\" };\nconst safe = _.omit(user, [\"password\"]);\n// 결과: { id: 1, name: \"kim\" }"
          },
          {
            "id": "language-lodash-p01-part-7",
            "title": "깊은 병합[merge]",
            "content": "import _ from \"lodash\";\n\nconst base = { a: 1, nested: { x: 1, y: 2 } };\nconst patch = { nested: { y: 9, z: 3 } };\nconst merged = _.merge({}, base, patch);",
            "displayContent": "// 깊은 병합[merge] — 중첩 객체를 재귀적으로 합침\nimport _ from \"lodash\";\n\nconst base = { a: 1, nested: { x: 1, y: 2 } };\nconst patch = { nested: { y: 9, z: 3 } };\nconst merged = _.merge({}, base, patch);\n// 결과: { a: 1, nested: { x: 1, y: 9, z: 3 } }"
          },
          {
            "id": "language-lodash-p01-part-8",
            "title": "변환[map] 필터[filter]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\", active: true },\n  { id: 2, name: \"lee\", active: false },\n];\nconst names = _.map(users, \"name\");\nconst active = _.filter(users, { active: true });",
            "displayContent": "// 변환[map] · 필터[filter]\nimport _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\", active: true },\n  { id: 2, name: \"lee\", active: false },\n];\nconst names = _.map(users, \"name\");\nconst active = _.filter(users, { active: true });\n// 결과: names=[\"kim\",\"lee\"], active=[{id:1,...}]"
          },
          {
            "id": "language-lodash-p01-part-9",
            "title": "찾기[find] 인덱스[findIndex]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst found = _.find(users, { id: 2 });\nconst idx = _.findIndex(users, { id: 2 });",
            "displayContent": "// 찾기[find] · 인덱스[findIndex]\nimport _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst found = _.find(users, { id: 2 });\nconst idx = _.findIndex(users, { id: 2 });\n// 결과: found={id:2,name:\"lee\"}, idx=1"
          },
          {
            "id": "language-lodash-p01-part-10",
            "title": "그룹화[groupBy]",
            "content": "import _ from \"lodash\";\n\nconst rows = [\n  { dept: \"dev\", name: \"kim\" },\n  { dept: \"dev\", name: \"lee\" },\n  { dept: \"hr\", name: \"park\" },\n];\nconst byDept = _.groupBy(rows, \"dept\");",
            "displayContent": "// 그룹화[groupBy] — 같은 키끼리 배열로 묶을 때\nimport _ from \"lodash\";\n\nconst rows = [\n  { dept: \"dev\", name: \"kim\" },\n  { dept: \"dev\", name: \"lee\" },\n  { dept: \"hr\", name: \"park\" },\n];\nconst byDept = _.groupBy(rows, \"dept\");\n// 결과: { dev: [kim,lee], hr: [park] }"
          },
          {
            "id": "language-lodash-p01-part-11",
            "title": "키 맵[keyBy]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst byId = _.keyBy(users, \"id\");",
            "displayContent": "// 키 맵[keyBy] — id로 바로 찾을 조회표[lookup]를 만들 때\nimport _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst byId = _.keyBy(users, \"id\");\n// 결과: { 1: {id:1,...}, 2: {id:2,...} }"
          },
          {
            "id": "language-lodash-p01-part-12",
            "title": "정렬[sortBy] 중복제거[uniq]",
            "content": "import _ from \"lodash\";\n\nconst scores = [\n  { name: \"lee\", score: 90 },\n  { name: \"kim\", score: 70 },\n];\nconst ranked = _.sortBy(scores, \"score\");\nconst tags = _.uniq([\"js\", \"ts\", \"js\", \"go\"]);",
            "displayContent": "// 정렬[sortBy] · 중복 제거[uniq]\nimport _ from \"lodash\";\n\nconst scores = [\n  { name: \"lee\", score: 90 },\n  { name: \"kim\", score: 70 },\n];\nconst ranked = _.sortBy(scores, \"score\");\nconst tags = _.uniq([\"js\", \"ts\", \"js\", \"go\"]);\n// 결과: ranked=kim→lee, tags=[\"js\",\"ts\",\"go\"]"
          },
          {
            "id": "language-lodash-p01-part-13",
            "title": "케이스 변환[camelCase kebabCase]",
            "content": "import _ from \"lodash\";\n\nconst camel = _.camelCase(\"user_name\");\nconst kebab = _.kebabCase(\"UserName\");",
            "displayContent": "// 케이스 변환[camelCase · kebabCase]\nimport _ from \"lodash\";\n\nconst camel = _.camelCase(\"user_name\");\nconst kebab = _.kebabCase(\"UserName\");\n// 결과: camel=\"userName\", kebab=\"user-name\""
          },
          {
            "id": "language-lodash-p01-part-14",
            "title": "디바운스[debounce]",
            "content": "import _ from \"lodash\";\n\nconst onSearch = _.debounce((q) => {\n  console.log(\"search\", q);\n}, 300);",
            "displayContent": "// 디바운스[debounce] — 입력이 멈춘 뒤 한 번만 실행\nimport _ from \"lodash\";\n\nconst onSearch = _.debounce((q) => {\n  console.log(\"search\", q);\n}, 300);"
          },
          {
            "id": "language-lodash-p01-part-15",
            "title": "스로틀[throttle]",
            "content": "import _ from \"lodash\";\n\nconst onScroll = _.throttle(() => {\n  console.log(\"scroll\");\n}, 200);",
            "displayContent": "// 스로틀[throttle] — 일정 간격으로만 실행 (스크롤·리사이즈)\nimport _ from \"lodash\";\n\nconst onScroll = _.throttle(() => {\n  console.log(\"scroll\");\n}, 200);"
          }
        ]
      },
      {
        "id": "language-lodash-p02",
        "title": "P02.체인-변환",
        "fileName": "P02.체인-변환.yaml",
        "sourcePath": "assets/raw/syntax/lodash/P02.체인-변환.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-lodash-p02-part-1",
            "title": "체인 파이프라인[chain]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { name: \"lee\", score: 90, active: true },\n  { name: \"kim\", score: 70, active: true },\n  { name: \"park\", score: 80, active: false },\n];\nconst names = _.chain(users)\n  .filter({ active: true })\n  .sortBy(\"score\")\n  .map(\"name\")\n  .value();",
            "displayContent": "// 체인 파이프라인[chain] — filter → sortBy → map → value\nimport _ from \"lodash\";\n\nconst users = [\n  { name: \"lee\", score: 90, active: true },\n  { name: \"kim\", score: 70, active: true },\n  { name: \"park\", score: 80, active: false },\n];\nconst names = _.chain(users)\n  .filter({ active: true })\n  .sortBy(\"score\")\n  .map(\"name\")\n  .value();\n// 결과: [\"kim\", \"lee\"]"
          },
          {
            "id": "language-lodash-p02-part-2",
            "title": "그룹 평균[groupBy mapValues meanBy]",
            "content": "import _ from \"lodash\";\n\nconst scores = [\n  { dept: \"dev\", score: 80 },\n  { dept: \"dev\", score: 90 },\n  { dept: \"hr\", score: 70 },\n];\nconst avgByDept = _.mapValues(_.groupBy(scores, \"dept\"), (rows) =>\n  _.meanBy(rows, \"score\"),\n);",
            "displayContent": "// 그룹 평균[groupBy + mapValues + meanBy]\nimport _ from \"lodash\";\n\nconst scores = [\n  { dept: \"dev\", score: 80 },\n  { dept: \"dev\", score: 90 },\n  { dept: \"hr\", score: 70 },\n];\nconst avgByDept = _.mapValues(_.groupBy(scores, \"dept\"), (rows) =>\n  _.meanBy(rows, \"score\"),\n);\n// 결과: { dev: 85, hr: 70 }"
          },
          {
            "id": "language-lodash-p02-part-3",
            "title": "조회표 조인[keyBy map]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst orders = [\n  { userId: 1, total: 100 },\n  { userId: 2, total: 200 },\n];\nconst byId = _.keyBy(users, \"id\");\nconst joined = _.map(orders, (o) => ({\n  ...o,\n  userName: byId[o.userId]?.name,\n}));",
            "displayContent": "// 조회표 조인[keyBy + map] — id로 이름 붙이기\nimport _ from \"lodash\";\n\nconst users = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst orders = [\n  { userId: 1, total: 100 },\n  { userId: 2, total: 200 },\n];\nconst byId = _.keyBy(users, \"id\");\nconst joined = _.map(orders, (o) => ({\n  ...o,\n  userName: byId[o.userId]?.name,\n}));\n// 결과: [{userId:1,total:100,userName:\"kim\"}, ...]"
          },
          {
            "id": "language-lodash-p02-part-4",
            "title": "평탄화 정리[flatten uniq sort]",
            "content": "import _ from \"lodash\";\n\nconst nested = [\n  [\"js\", \"ts\"],\n  [\"go\", \"js\"],\n  [\"ts\"],\n];\nconst tags = _.sortBy(_.uniq(_.flatten(nested)));",
            "displayContent": "// 평탄화 정리[flatten + uniq + sort]\nimport _ from \"lodash\";\n\nconst nested = [\n  [\"js\", \"ts\"],\n  [\"go\", \"js\"],\n  [\"ts\"],\n];\nconst tags = _.sortBy(_.uniq(_.flatten(nested)));\n// 결과: [\"go\", \"js\", \"ts\"]"
          },
          {
            "id": "language-lodash-p02-part-5",
            "title": "배열→객체[transform]",
            "content": "import _ from \"lodash\";\n\nconst pairs = [\n  [\"a\", 1],\n  [\"b\", 2],\n];\nconst obj = _.transform(\n  pairs,\n  (acc, [k, v]) => {\n    acc[k] = v;\n  },\n  {},\n);",
            "displayContent": "// 배열→객체[transform] — reduce 대신 누적 객체 만들기\nimport _ from \"lodash\";\n\nconst pairs = [\n  [\"a\", 1],\n  [\"b\", 2],\n];\nconst obj = _.transform(\n  pairs,\n  (acc, [k, v]) => {\n    acc[k] = v;\n  },\n  {},\n);\n// 결과: { a: 1, b: 2 }"
          },
          {
            "id": "language-lodash-p02-part-6",
            "title": "조건 누적[transform]",
            "content": "import _ from \"lodash\";\n\nconst rows = [\n  { pass: true, score: 80 },\n  { pass: false, score: 40 },\n  { pass: true, score: 90 },\n];\nconst total = _.transform(\n  rows,\n  (acc, row) => {\n    if (row.pass) acc.sum += row.score;\n  },\n  { sum: 0 },\n);",
            "displayContent": "// 조건 누적[transform] — 합격만 합산\nimport _ from \"lodash\";\n\nconst rows = [\n  { pass: true, score: 80 },\n  { pass: false, score: 40 },\n  { pass: true, score: 90 },\n];\nconst total = _.transform(\n  rows,\n  (acc, row) => {\n    if (row.pass) acc.sum += row.score;\n  },\n  { sum: 0 },\n);\n// 결과: { sum: 170 }"
          },
          {
            "id": "language-lodash-p02-part-7",
            "title": "커스텀 그룹[transform]",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { role: \"admin\", name: \"kim\" },\n  { role: \"member\", name: \"lee\" },\n  { role: \"admin\", name: \"park\" },\n];\nconst namesByRole = _.transform(\n  users,\n  (acc, u) => {\n    (acc[u.role] || (acc[u.role] = [])).push(u.name);\n  },\n  {},\n);",
            "displayContent": "// 커스텀 그룹[transform] — groupBy와 비슷하되 값을 직접 가공\nimport _ from \"lodash\";\n\nconst users = [\n  { role: \"admin\", name: \"kim\" },\n  { role: \"member\", name: \"lee\" },\n  { role: \"admin\", name: \"park\" },\n];\nconst namesByRole = _.transform(\n  users,\n  (acc, u) => {\n    (acc[u.role] || (acc[u.role] = [])).push(u.name);\n  },\n  {},\n);\n// 결과: { admin: [\"kim\",\"park\"], member: [\"lee\"] }"
          },
          {
            "id": "language-lodash-p02-part-8",
            "title": "keyBy vs groupBy 비교",
            "content": "import _ from \"lodash\";\n\nconst users = [\n  { id: 1, dept: \"dev\", name: \"kim\" },\n  { id: 2, dept: \"dev\", name: \"lee\" },\n];\nconst byId = _.keyBy(users, \"id\");\nconst byDept = _.groupBy(users, \"dept\");",
            "displayContent": "// keyBy vs groupBy 비교\n// keyBy: 키 → 단일 객체 (조회표[lookup])\n// groupBy: 키 → 배열 (묶음[bucket])\nimport _ from \"lodash\";\n\nconst users = [\n  { id: 1, dept: \"dev\", name: \"kim\" },\n  { id: 2, dept: \"dev\", name: \"lee\" },\n];\nconst byId = _.keyBy(users, \"id\");\nconst byDept = _.groupBy(users, \"dept\");\n// byId[1] → 객체 하나 / byDept.dev → 배열"
          }
        ]
      }
    ]
  },
  {
    "id": "postgresql",
    "label": "PostgreSQL",
    "folderName": "postgresql",
    "lessons": [
      {
        "id": "language-postgresql-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/postgresql/P01.기본-패턴.yaml",
        "language": "sql",
        "parts": [
          {
            "id": "language-postgresql-p01-part-1",
            "title": "테이블 생성[create table]",
            "content": "CREATE TABLE users (\n    user_id      SERIAL PRIMARY KEY,\n    user_name    TEXT NOT NULL,\n    user_age     INTEGER,\n    is_active    BOOLEAN DEFAULT TRUE,\n    created_at   TIMESTAMPTZ DEFAULT NOW()\n);",
            "displayContent": "-- 테이블 생성[create table]\n-- 자주 쓰는 타입만: SERIAL, TEXT, INTEGER, BOOLEAN, TIMESTAMPTZ\nCREATE TABLE users (\n    user_id      SERIAL PRIMARY KEY,\n    user_name    TEXT NOT NULL,\n    user_age     INTEGER,\n    is_active    BOOLEAN DEFAULT TRUE,\n    created_at   TIMESTAMPTZ DEFAULT NOW()\n);"
          },
          {
            "id": "language-postgresql-p01-part-2",
            "title": "삽입과 반환[insert returning]",
            "content": "INSERT INTO users (user_name, user_age)\nVALUES ('kim', 30)\nRETURNING user_id, user_name;",
            "displayContent": "-- 삽입과 반환[insert returning]\nINSERT INTO users (user_name, user_age)\nVALUES ('kim', 30)\nRETURNING user_id, user_name;"
          },
          {
            "id": "language-postgresql-p01-part-3",
            "title": "조회[select]",
            "content": "SELECT user_id, user_name, user_age\nFROM users;",
            "displayContent": "-- 조회[select]\nSELECT user_id, user_name, user_age\nFROM users;"
          },
          {
            "id": "language-postgresql-p01-part-4",
            "title": "수정과 반환[update returning]",
            "content": "UPDATE users\nSET user_age = 31\nWHERE user_id = 1\nRETURNING user_id, user_age;",
            "displayContent": "-- 수정과 반환[update returning]\nUPDATE users\nSET user_age = 31\nWHERE user_id = 1\nRETURNING user_id, user_age;"
          },
          {
            "id": "language-postgresql-p01-part-5",
            "title": "삭제와 반환[delete returning]",
            "content": "DELETE FROM users\nWHERE user_id = 2\nRETURNING user_id;",
            "displayContent": "-- 삭제와 반환[delete returning]\nDELETE FROM users\nWHERE user_id = 2\nRETURNING user_id;"
          },
          {
            "id": "language-postgresql-p01-part-6",
            "title": "조건·대소문자무시[where ilike]",
            "content": "SELECT user_name\nFROM users\nWHERE user_name ILIKE 'k%'\n  AND user_age >= 20;",
            "displayContent": "-- 조건·대소문자무시[where ilike]\n-- ILIKE는 대소문자를 무시하는 LIKE\nSELECT user_name\nFROM users\nWHERE user_name ILIKE 'k%'\n  AND user_age >= 20;"
          },
          {
            "id": "language-postgresql-p01-part-7",
            "title": "정렬·개수제한[order by limit]",
            "content": "SELECT user_name, user_age\nFROM users\nORDER BY user_age DESC\nLIMIT 10;",
            "displayContent": "-- 정렬·개수제한[order by limit]\nSELECT user_name, user_age\nFROM users\nORDER BY user_age DESC\nLIMIT 10;"
          },
          {
            "id": "language-postgresql-p01-part-8",
            "title": "내부 조인[inner join]",
            "content": "SELECT u.user_name, o.total_price\nFROM users u\nINNER JOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 내부 조인[inner join]\nSELECT u.user_name, o.total_price\nFROM users u\nINNER JOIN orders o\n  ON u.user_id = o.user_id;"
          },
          {
            "id": "language-postgresql-p01-part-9",
            "title": "왼쪽 조인[left join]",
            "content": "SELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 왼쪽 조인[left join]\nSELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;"
          }
        ]
      },
      {
        "id": "language-postgresql-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/postgresql/P02.실무-패턴.yaml",
        "language": "sql",
        "parts": [
          {
            "id": "language-postgresql-p02-part-1",
            "title": "그룹·집계[group by having]",
            "content": "SELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 2;",
            "displayContent": "-- 그룹·집계[group by having]\nSELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 2;"
          },
          {
            "id": "language-postgresql-p02-part-2",
            "title": "공통 테이블 식[with cte]",
            "content": "WITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 공통 테이블 식[with cte]\nWITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;"
          },
          {
            "id": "language-postgresql-p02-part-3",
            "title": "업서트[upsert]",
            "content": "INSERT INTO users (user_id, user_name, user_age)\nVALUES (1, 'kim', 31)\nON CONFLICT (user_id)\nDO UPDATE SET\n    user_name = EXCLUDED.user_name,\n    user_age = EXCLUDED.user_age;",
            "displayContent": "-- 업서트[upsert]\n-- 충돌 시 UPDATE — INSERT ON CONFLICT DO UPDATE\nINSERT INTO users (user_id, user_name, user_age)\nVALUES (1, 'kim', 31)\nON CONFLICT (user_id)\nDO UPDATE SET\n    user_name = EXCLUDED.user_name,\n    user_age = EXCLUDED.user_age;"
          },
          {
            "id": "language-postgresql-p02-part-4",
            "title": "jsonb 접근[jsonb]",
            "content": "SELECT meta -> 'city' AS city_json,\n       meta ->> 'city' AS city_text\nFROM users;",
            "displayContent": "-- jsonb 접근[jsonb]\n-- -> 는 jsonb, ->> 는 text\nSELECT meta -> 'city' AS city_json,\n       meta ->> 'city' AS city_text\nFROM users;"
          }
        ]
      }
    ]
  },
  {
    "id": "python",
    "label": "Python",
    "folderName": "python",
    "lessons": [
      {
        "id": "language-python-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/python/P01.기본-패턴.yaml",
        "language": "python",
        "parts": [
          {
            "id": "language-python-p01-part-1",
            "title": "기본 타입[int float str bool]",
            "content": "user_name = \"kim\"\nuser_age = 30\nscore = 4.5\nis_admin = True\nprint(user_name, user_age, score, is_admin)",
            "displayContent": "# 기본 타입[int float str bool]\nuser_name = \"kim\"\nuser_age = 30\nscore = 4.5\nis_admin = True\nprint(user_name, user_age, score, is_admin)"
          },
          {
            "id": "language-python-p01-part-2",
            "title": "리스트[list]",
            "content": "skills = [\"python\", \"sql\"]\nprint(skills[0])",
            "displayContent": "# 리스트[list]\nskills = [\"python\", \"sql\"]\nprint(skills[0])\n# 결과: python"
          },
          {
            "id": "language-python-p01-part-3",
            "title": "딕셔너리[dict = JSON]",
            "content": "user = {\n    \"name\": \"kim\",\n    \"age\": 30,\n    \"skills\": [\"python\", \"sql\"],\n}\nprint(user[\"name\"])",
            "displayContent": "# 딕셔너리[dict = JSON]\n# 실무 데이터는 list + dict 조합이 대부분이다\nuser = {\n    \"name\": \"kim\",\n    \"age\": 30,\n    \"skills\": [\"python\", \"sql\"],\n}\nprint(user[\"name\"])"
          },
          {
            "id": "language-python-p01-part-4",
            "title": "None - 값 없음[None]",
            "content": "email = None\nprint(email)",
            "displayContent": "# None - 값 없음[None]\nemail = None\nprint(email)"
          },
          {
            "id": "language-python-p01-part-5",
            "title": "조건문[if]",
            "content": "if user[\"age\"] > 20:\n    print(\"성인\")",
            "displayContent": "# 조건문[if]\nif user[\"age\"] > 20:\n    print(\"성인\")"
          },
          {
            "id": "language-python-p01-part-6",
            "title": "값 없을 때[if not get]",
            "content": "if not user.get(\"email\"):\n    print(\"이메일 없음\")",
            "displayContent": "# 값 없을 때[if not get] — 실무 핵심\nif not user.get(\"email\"):\n    print(\"이메일 없음\")"
          },
          {
            "id": "language-python-p01-part-7",
            "title": "리스트 순회[for]",
            "content": "for skill in user[\"skills\"]:\n    print(skill)",
            "displayContent": "# 리스트 순회[for]\nfor skill in user[\"skills\"]:\n    print(skill)"
          },
          {
            "id": "language-python-p01-part-8",
            "title": "딕셔너리 순회[items]",
            "content": "for key, value in user.items():\n    print(key, value)",
            "displayContent": "# 딕셔너리 순회[items]\nfor key, value in user.items():\n    print(key, value)"
          },
          {
            "id": "language-python-p01-part-9",
            "title": "함수[def] - 한 역할",
            "content": "def get_user_name(user):\n    return user[\"name\"]\n\nprint(get_user_name(user))",
            "displayContent": "# 함수[def] - 한 역할\ndef get_user_name(user):\n    return user[\"name\"]\n\nprint(get_user_name(user))"
          },
          {
            "id": "language-python-p01-part-10",
            "title": "get 안전 접근[get]",
            "content": "print(user.get(\"name\"))\nprint(user.get(\"email\"))",
            "displayContent": "# get 안전 접근[get]\n# user[\"name\"] = 키가 확실할 때\n# user.get(\"name\") = 없을 수도 있을 때\nprint(user.get(\"name\"))\nprint(user.get(\"email\"))\n# 결과: kim / None"
          }
        ]
      },
      {
        "id": "language-python-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/python/P02.실무-패턴.yaml",
        "language": "python",
        "parts": [
          {
            "id": "language-python-p02-part-1",
            "title": "예제 데이터[list of dict]",
            "content": "users = [\n    {\"name\": \"kim\", \"age\": 30},\n    {\"name\": \"lee\", \"age\": 20},\n    {\"name\": \"park\", \"age\": 25},\n]",
            "displayContent": "# 예제 데이터[list of dict]\nusers = [\n    {\"name\": \"kim\", \"age\": 30},\n    {\"name\": \"lee\", \"age\": 20},\n    {\"name\": \"park\", \"age\": 25},\n]"
          },
          {
            "id": "language-python-p02-part-2",
            "title": "필터[list comprehension]",
            "content": "adults = [u for u in users if u[\"age\"] >= 25]\nprint(adults)",
            "displayContent": "# 필터[list comprehension]\n# 나이 25 이상만 뽑기\nadults = [u for u in users if u[\"age\"] >= 25]\nprint(adults)"
          },
          {
            "id": "language-python-p02-part-3",
            "title": "변환[list comprehension]",
            "content": "names = [u[\"name\"] for u in users]\nprint(names)",
            "displayContent": "# 변환[list comprehension]\n# 이름만 리스트로 만들기\nnames = [u[\"name\"] for u in users]\nprint(names)\n# 결과: ['kim', 'lee', 'park']"
          },
          {
            "id": "language-python-p02-part-4",
            "title": "숫자 필터·변환[even double]",
            "content": "nums = [1, 2, 3, 4]\neven = [n for n in nums if n % 2 == 0]\ndouble = [n * 2 for n in nums]\nprint(even, double)",
            "displayContent": "# 숫자 필터·변환[even double]\nnums = [1, 2, 3, 4]\neven = [n for n in nums if n % 2 == 0]\ndouble = [n * 2 for n in nums]\nprint(even, double)\n# 결과: [2, 4] [2, 4, 6, 8]"
          },
          {
            "id": "language-python-p02-part-5",
            "title": "기본값[get default]",
            "content": "user = {\"name\": \"kim\"}\nage = user.get(\"age\", 0)\nprint(age)",
            "displayContent": "# 기본값[get default]\nuser = {\"name\": \"kim\"}\nage = user.get(\"age\", 0)\nprint(age)\n# 결과: 0"
          },
          {
            "id": "language-python-p02-part-6",
            "title": "값 추가[dict assign]",
            "content": "user[\"email\"] = \"a@a.com\"\nprint(user[\"email\"])",
            "displayContent": "# 값 추가[dict assign]\nuser[\"email\"] = \"a@a.com\"\nprint(user[\"email\"])"
          },
          {
            "id": "language-python-p02-part-7",
            "title": "정렬[sorted key]",
            "content": "sorted_users = sorted(users, key=lambda u: u[\"age\"], reverse=True)\nprint(sorted_users[0][\"name\"])",
            "displayContent": "# 정렬[sorted key]\nsorted_users = sorted(users, key=lambda u: u[\"age\"], reverse=True)\nprint(sorted_users[0][\"name\"])\n# 결과: kim"
          },
          {
            "id": "language-python-p02-part-8",
            "title": "예외 처리[try except]",
            "content": "try:\n    age = int(\"abc\")\nexcept ValueError:\n    age = 0\nprint(age)",
            "displayContent": "# 예외 처리[try except]\n# 프로그램이 죽지 않게 막는 장치\ntry:\n    age = int(\"abc\")\nexcept ValueError:\n    age = 0\nprint(age)\n# 결과: 0"
          },
          {
            "id": "language-python-p02-part-9",
            "title": "JSON 파싱[json.loads]",
            "content": "import json\n\ndata = json.loads('{\"name\": \"kim\"}')\nprint(data[\"name\"])",
            "displayContent": "# JSON 파싱[json.loads]\n# API / 로그 / 설정 = 거의 다 JSON\nimport json\n\ndata = json.loads('{\"name\": \"kim\"}')\nprint(data[\"name\"])"
          },
          {
            "id": "language-python-p02-part-10",
            "title": "JSON 문자열화[json.dumps]",
            "content": "import json\n\ntext = json.dumps({\"name\": \"kim\", \"age\": 30})\nprint(text)",
            "displayContent": "# JSON 문자열화[json.dumps]\nimport json\n\ntext = json.dumps({\"name\": \"kim\", \"age\": 30})\nprint(text)"
          },
          {
            "id": "language-python-p02-part-11",
            "title": "클래스 최소[class]",
            "content": "class User:\n    def __init__(self, name):\n        self.name = name\n\nu = User(\"kim\")\nprint(u.name)",
            "displayContent": "# 클래스 최소[class]\n# 실무에서는 데이터 묶음 정도로만 먼저 쓴다\nclass User:\n    def __init__(self, name):\n        self.name = name\n\nu = User(\"kim\")\nprint(u.name)"
          },
          {
            "id": "language-python-p02-part-12",
            "title": "미션 한 줄[filter + names]",
            "content": "result = [u[\"name\"] for u in users if u[\"age\"] >= 25]\nprint(result)",
            "displayContent": "# 미션 한 줄[filter + names]\n# 25세 이상 이름만\nresult = [u[\"name\"] for u in users if u[\"age\"] >= 25]\nprint(result)\n# 결과: ['kim', 'park']"
          }
        ]
      }
    ]
  },
  {
    "id": "react",
    "label": "React",
    "folderName": "react",
    "lessons": [
      {
        "id": "language-react-p01",
        "title": "P01.immer-상태업데이트",
        "fileName": "P01.immer-상태업데이트.yaml",
        "sourcePath": "assets/raw/syntax/react/P01.immer-상태업데이트.yaml",
        "language": "typescript",
        "parts": [
          {
            "id": "language-react-p01-part-1",
            "title": "produce + find 토글[toggle]",
            "content": "type Task = { id: number; title: string; done: boolean };\ntype Member = { id: number; name: string; tasks: Task[] };\ntype Org = { teams: { members: Member[] }[] };\n\nconst toggleTask = (taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) task.done = !task.done;\n    }),\n  );\n};",
            "displayContent": "// produce + find 토글[toggle] — 깊은 노드를 찾아 done 반전\ntype Task = { id: number; title: string; done: boolean };\ntype Member = { id: number; name: string; tasks: Task[] };\ntype Org = { teams: { members: Member[] }[] };\n\nconst toggleTask = (taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) task.done = !task.done;\n    }),\n  );\n};"
          },
          {
            "id": "language-react-p01-part-2",
            "title": "assign 부분 패치[Partial]",
            "content": "type Task = { id: number; title: string; done: boolean };\n\nconst patchTask = (taskId: number, patch: Partial<Task>) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) _.assign(task, patch);\n    }),\n  );\n};",
            "displayContent": "// assign 부분 패치[Partial] — 찾은 객체에 필드만 덮어씀\ntype Task = { id: number; title: string; done: boolean };\n\nconst patchTask = (taskId: number, patch: Partial<Task>) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) _.assign(task, patch);\n    }),\n  );\n};"
          },
          {
            "id": "language-react-p01-part-3",
            "title": "findIndex + splice 삭제[remove]",
            "content": "type Task = { id: number; title: string; done: boolean };\ntype Member = { id: number; tasks: Task[] };\n\nconst removeTask = (memberId: number, taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const member = _.find(\n        _.flatMap(draft.teams, (t) => t.members),\n        { id: memberId },\n      ) as Member | undefined;\n      if (!member) return;\n      const idx = _.findIndex(member.tasks, { id: taskId });\n      if (idx >= 0) member.tasks.splice(idx, 1);\n    }),\n  );\n};",
            "displayContent": "// findIndex + splice 삭제[remove]\ntype Task = { id: number; title: string; done: boolean };\ntype Member = { id: number; tasks: Task[] };\n\nconst removeTask = (memberId: number, taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const member = _.find(\n        _.flatMap(draft.teams, (t) => t.members),\n        { id: memberId },\n      ) as Member | undefined;\n      if (!member) return;\n      const idx = _.findIndex(member.tasks, { id: taskId });\n      if (idx >= 0) member.tasks.splice(idx, 1);\n    }),\n  );\n};"
          },
          {
            "id": "language-react-p01-part-4",
            "title": "변경 없음[same reference]",
            "content": "const noopUpdate = () => {\n  setOrg((prev) =>\n    produce(prev, (_draft) => {\n    }),\n  );\n};",
            "displayContent": "// 변경 없음[same reference]\n// draft를 건드리지 않으면 Immer가 원본[original]을 그대로 반환 → React 리렌더[re-render] 없음\nconst noopUpdate = () => {\n  setOrg((prev) =>\n    produce(prev, (_draft) => {\n      // 의도적으로 수정하지 않음\n    }),\n  );\n};\n// 결과: prev === next (참조 동일)"
          },
          {
            "id": "language-react-p01-part-5",
            "title": "변경 있음[new reference]",
            "content": "const bumpName = () => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      draft.name = draft.name + \"!\";\n    }),\n  );\n};",
            "displayContent": "// 변경 있음[new reference]\n// draft를 수정하면 Immer가 새 객체[new object]를 반환 → 리렌더[re-render] 발생\nconst bumpName = () => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      draft.name = draft.name + \"!\";\n    }),\n  );\n};\n// 결과: prev !== next (새 참조)"
          },
          {
            "id": "language-react-p01-part-6",
            "title": "업데이터 팩토리[makeTaskUpdater]",
            "content": "type Task = { id: number; title: string; done: boolean };\n\nconst makeTaskUpdater = (fn: (task: Task) => void) => (taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) fn(task);\n    }),\n  );\n};\n\nconst markDone = makeTaskUpdater((task) => {\n  task.done = true;\n});",
            "displayContent": "// 업데이터 팩토리[makeTaskUpdater] — 같은 produce 뼈대를 재사용\ntype Task = { id: number; title: string; done: boolean };\n\nconst makeTaskUpdater = (fn: (task: Task) => void) => (taskId: number) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const task = _.find(\n        _.flatMap(draft.teams, (t) => _.flatMap(t.members, (m) => m.tasks)),\n        { id: taskId },\n      );\n      if (task) fn(task);\n    }),\n  );\n};\n\nconst markDone = makeTaskUpdater((task) => {\n  task.done = true;\n});"
          },
          {
            "id": "language-react-p01-part-7",
            "title": "배치 패치[batch assign]",
            "content": "type Task = { id: number; title: string; done: boolean };\n\nconst patchMany = (items: { id: number; patch: Partial<Task> }[]) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const all = _.flatMap(draft.teams, (t) =>\n        _.flatMap(t.members, (m) => m.tasks),\n      );\n      for (const item of items) {\n        const task = _.find(all, { id: item.id });\n        if (task) _.assign(task, item.patch);\n      }\n    }),\n  );\n};",
            "displayContent": "// 배치 패치[batch assign] — 한 번의 produce 안에서 여러 건 갱신\ntype Task = { id: number; title: string; done: boolean };\n\nconst patchMany = (items: { id: number; patch: Partial<Task> }[]) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const all = _.flatMap(draft.teams, (t) =>\n        _.flatMap(t.members, (m) => m.tasks),\n      );\n      for (const item of items) {\n        const task = _.find(all, { id: item.id });\n        if (task) _.assign(task, item.patch);\n      }\n    }),\n  );\n};"
          },
          {
            "id": "language-react-p01-part-8",
            "title": "get + 키 재할당[path update]",
            "content": "type Member = { id: number; name: string };\n\nconst renameMember = (memberId: number, name: string) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const members = _.get(draft, \"teams[0].members\") as Member[] | undefined;\n      if (!members) return;\n      const idx = _.findIndex(members, { id: memberId });\n      if (idx < 0) return;\n      members[idx] = { ...members[idx], name };\n    }),\n  );\n};",
            "displayContent": "// get + 키 재할당[path update]\n// _.get으로 부모를 찾고, 부모[key]에 새 값을 넣으면 Immer가 경로를 추적한다\ntype Member = { id: number; name: string };\n\nconst renameMember = (memberId: number, name: string) => {\n  setOrg((prev) =>\n    produce(prev, (draft) => {\n      const members = _.get(draft, \"teams[0].members\") as Member[] | undefined;\n      if (!members) return;\n      const idx = _.findIndex(members, { id: memberId });\n      if (idx < 0) return;\n      members[idx] = { ...members[idx], name };\n    }),\n  );\n};"
          }
        ]
      }
    ]
  },
  {
    "id": "regex-for-javascript",
    "label": "RegEx for JavaScript",
    "folderName": "regex-for-javascript",
    "lessons": [
      {
        "id": "language-regex-for-javascript-p01",
        "title": "P01.핵심-패턴",
        "fileName": "P01.핵심-패턴.yaml",
        "sourcePath": "assets/raw/syntax/regex-for-javascript/P01.핵심-패턴.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-regex-for-javascript-p01-part-1",
            "title": "리터럴[literal] / 생성자[constructor]",
            "content": "/hello/gi.test('Hello World');\nnew RegExp('hello', 'gi').test('HELLO');",
            "displayContent": "// 리터럴[literal] / 생성자[constructor]\n/hello/gi.test('Hello World');                 // true\nnew RegExp('hello', 'gi').test('HELLO');       // true"
          },
          {
            "id": "language-regex-for-javascript-p01-part-2",
            "title": "플래그[flag]",
            "content": "'aAa'.match(/a/g);\n'aAa'.match(/a/gi);",
            "displayContent": "// 플래그[flag]\n'aAa'.match(/a/g);   // ['a', 'a']\n'aAa'.match(/a/gi);  // ['a', 'A', 'a']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-3",
            "title": "앵커[anchor]",
            "content": "'Hello World'.match(/^Hello/);\n'Hello World'.match(/World$/);",
            "displayContent": "// 앵커[anchor]\n'Hello World'.match(/^Hello/);  // ['Hello']\n'Hello World'.match(/World$/);  // ['World']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-4",
            "title": "문자 클래스[character class]",
            "content": "'ab12'.match(/\\d/g);\n'ab12'.match(/\\w/g);\n'a b'.match(/\\s/g);",
            "displayContent": "// 문자 클래스[character class]\n'ab12'.match(/\\d/g);  // ['1', '2']\n'ab12'.match(/\\w/g);  // ['a', 'b', '1', '2']\n'a b'.match(/\\s/g);   // [' ']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-5",
            "title": "문자셋[character set]",
            "content": "'grey gray'.match(/gr[ae]y/g);\n'hello123'.match(/[^a-z]+/g);",
            "displayContent": "// 문자셋[character set]\n'grey gray'.match(/gr[ae]y/g);   // ['grey', 'gray']\n'hello123'.match(/[^a-z]+/g);    // ['123']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-6",
            "title": "수량자[quantifier]",
            "content": "'gry'.match(/gra*y/);\n'gray'.match(/gra?y/);\n'graaay'.match(/gra+y/);\n'graay'.match(/gra{2}y/);",
            "displayContent": "// 수량자[quantifier]\n'gry'.match(/gra*y/);        // ['gry']\n'gray'.match(/gra?y/);       // ['gray']\n'graaay'.match(/gra+y/);     // ['graaay']\n'graay'.match(/gra{2}y/);    // ['graay']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-7",
            "title": "그룹[group]",
            "content": "'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);",
            "displayContent": "// 그룹[group]\n'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\n// ['2026-03-18', '2026', '03', '18']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-8",
            "title": "네임드 그룹[named group]",
            "content": "var dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year;\ndateMatch.groups.month;\ndateMatch.groups.day;",
            "displayContent": "// 네임드 그룹[named group]\nvar dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);\ndateMatch.groups.year;   // '2026'\ndateMatch.groups.month;  // '03'\ndateMatch.groups.day;    // '18'"
          },
          {
            "id": "language-regex-for-javascript-p01-part-9",
            "title": "전방탐색[lookahead]",
            "content": "'100px 200em 50px'.match(/\\d+(?=px)/g);",
            "displayContent": "// 전방탐색[lookahead]\n'100px 200em 50px'.match(/\\d+(?=px)/g);  // ['100', '50']"
          },
          {
            "id": "language-regex-for-javascript-p01-part-10",
            "title": "후방탐색[lookbehind]",
            "content": "'$100 £200 $50'.match(/(?<=\\$)\\d+/g);\n\n'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');",
            "displayContent": "// 후방탐색[lookbehind]\n'$100 £200 $50'.match(/(?<=\\$)\\d+/g);    // ['100', '50']\n\n// replace\n'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');\n// '18/03/2026'"
          },
          {
            "id": "language-regex-for-javascript-p01-part-11",
            "title": "실용 패턴[practical pattern] - 이메일[email]",
            "content": "var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com');\nemailRe.test('invalid@');",
            "displayContent": "// 실용 패턴[practical pattern] - 이메일[email]\nvar emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;\nemailRe.test('user@example.com');  // true\nemailRe.test('invalid@');          // false"
          },
          {
            "id": "language-regex-for-javascript-p01-part-12",
            "title": "실용 패턴[practical pattern] - 전화번호[phone number]",
            "content": "var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678');",
            "displayContent": "// 실용 패턴[practical pattern] - 전화번호[phone number]\nvar phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;\nphoneRe.test('010-1234-5678'); // true"
          },
          {
            "id": "language-regex-for-javascript-p01-part-13",
            "title": "실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기",
            "content": "var multiLineSource = `functionAAAAA(asdf,\n  qwer,\n  zxcv)`;\nmultiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);",
            "displayContent": "// 실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기\nvar multiLineSource = `functionAAAAA(asdf,\n  qwer,\n  zxcv)`;\nmultiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);\n// ['functionAAAAA(asdf,\\n  qwer,\\n  zxcv)']"
          }
        ]
      },
      {
        "id": "language-regex-for-javascript-p02",
        "title": "P02.실무-추출",
        "fileName": "P02.실무-추출.yaml",
        "sourcePath": "assets/raw/syntax/regex-for-javascript/P02.실무-추출.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-regex-for-javascript-p02-part-1",
            "title": "파일 확장자[extension] 앞까지",
            "content": "'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];",
            "displayContent": "// 파일 확장자[extension] 앞까지 — 게으른 수량자 + 전방 탐색\n'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];\n// 결과: abc/def/video."
          },
          {
            "id": "language-regex-for-javascript-p02-part-2",
            "title": "숫자와 확장자 사이 텍스트[capture group]",
            "content": "'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];",
            "displayContent": "// 숫자와 확장자 사이 텍스트[capture group]\n'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];\n// 결과: 테스트"
          },
          {
            "id": "language-regex-for-javascript-p02-part-3",
            "title": "여러 줄 함수 호출 찾기[multiline match]",
            "content": "var fnSource = `functionAAAAA(a,\n  b,\n  c)`;\nfnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];",
            "displayContent": "// 여러 줄 함수 호출 찾기[multiline match] — [\\s\\S]는 줄바꿈 포함 아무 문자\nvar fnSource = `functionAAAAA(a,\n  b,\n  c)`;\nfnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];\n// 결과: functionAAAAA(a, ... c) 전체"
          },
          {
            "id": "language-regex-for-javascript-p02-part-4",
            "title": "key=value 반복 추출[matchAll]",
            "content": "var logText = 'A=111,B=222,C=333';\nArray.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({\n  key: item[1],\n  value: item[2],\n}));",
            "displayContent": "// key=value 반복 추출[matchAll]\nvar logText = 'A=111,B=222,C=333';\nArray.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({\n  key: item[1],\n  value: item[2],\n}));\n// 결과: [{ key:'A', value:'111' }, { key:'B', value:'222' }, { key:'C', value:'333' }]"
          },
          {
            "id": "language-regex-for-javascript-p02-part-5",
            "title": "태그 안 내용 추출[lookbehind + lookahead]",
            "content": "'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];",
            "displayContent": "// 태그 안 내용 추출[lookbehind + lookahead]\n'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];\n// 결과: Hello"
          },
          {
            "id": "language-regex-for-javascript-p02-part-6",
            "title": "주석 줄 제외하고 호출만[negative lookahead]",
            "content": "var codeText = '// AAA()\\nAAA()';\ncodeText.match(/^(?!\\s*\\/\\/).*AAA\\(\\)/m)[0];",
            "displayContent": "// 주석 줄 제외하고 호출만[negative lookahead] — m 플래그로 줄 단위 검사\nvar codeText = '// AAA()\\nAAA()';\ncodeText.match(/^(?!\\s*\\/\\/).*AAA\\(\\)/m)[0];\n// 결과: AAA()  (주석 처리된 첫 줄은 제외)"
          }
        ]
      },
      {
        "id": "language-regex-for-javascript-p03",
        "title": "P03.VSCode-실무검색",
        "fileName": "P03.VSCode-실무검색.yaml",
        "sourcePath": "assets/raw/syntax/regex-for-javascript/P03.VSCode-실무검색.yaml",
        "language": "javascript",
        "parts": [
          {
            "id": "language-regex-for-javascript-p03-part-1",
            "title": "함수 호출만[\\\\bAAA\\\\s*\\\\(]",
            "content": "var code = \"AAA(); const x = AAA(1);\";\ncode.match(/\\bAAA\\s*\\(/g);",
            "displayContent": "// 함수 호출만[\\bAAA\\s*\\(]\n// VS Code: Ctrl+Shift+F → Regex ON\n// 정의·주석도 같이 잡힐 수 있음\nvar code = \"AAA(); const x = AAA(1);\";\ncode.match(/\\bAAA\\s*\\(/g);\n// 결과: ['AAA(', 'AAA(']"
          },
          {
            "id": "language-regex-for-javascript-p03-part-2",
            "title": "정의부 제외 호출[lookbehind]",
            "content": "var src = \"function AAA() {}\\nAAA();\";\nsrc.match(/(?<!function\\s)\\bAAA\\s*\\(/g);",
            "displayContent": "// 정의부 제외 호출[lookbehind]\n// function AAA( 는 빼고 호출만 (JS/TS용)\nvar src = \"function AAA() {}\\nAAA();\";\nsrc.match(/(?<!function\\s)\\bAAA\\s*\\(/g);\n// 결과: ['AAA(']"
          },
          {
            "id": "language-regex-for-javascript-p03-part-3",
            "title": "주석 줄 제외[negative lookahead]",
            "content": "var code = \"// AAA()\\nAAA()\";\ncode.match(/^(?!\\s*\\/\\/).*?\\bAAA\\s*\\(/m);",
            "displayContent": "// 주석 줄 제외[negative lookahead]\nvar code = \"// AAA()\\nAAA()\";\ncode.match(/^(?!\\s*\\/\\/).*?\\bAAA\\s*\\(/m);\n// 결과: 두 번째 줄의 AAA("
          },
          {
            "id": "language-regex-for-javascript-p03-part-4",
            "title": "Day1 - 확장자 앞 글자[lookaround]",
            "content": "\"123abc.mp4\".match(/(?<=\\\\d+)[A-Za-z]+(?=\\\\.)/)[0];",
            "displayContent": "// Day1 - 확장자 앞 글자[lookaround]\n// 123abc.mp4 → abc\n\"123abc.mp4\".match(/(?<=\\d+)[A-Za-z]+(?=\\.)/)[0];\n// 결과: abc"
          },
          {
            "id": "language-regex-for-javascript-p03-part-5",
            "title": "Day2 - 여러 줄 함수[\\\\s\\\\S]",
            "content": "var fn = `func(\n  a,\n  b,\n  c\n)`;\nfn.match(/func\\([\\s\\S]*?\\)/)[0];",
            "displayContent": "// Day2 - 여러 줄 함수[\\s\\S]\nvar fn = `func(\n  a,\n  b,\n  c\n)`;\nfn.match(/func\\([\\s\\S]*?\\)/)[0];"
          },
          {
            "id": "language-regex-for-javascript-p03-part-6",
            "title": "Day3 - error 줄만",
            "content": "var log = \"error: xxx\\ninfo: yyy\\nerror: zzz\";\nlog.match(/^error:.*$/gm);",
            "displayContent": "// Day3 - error 줄만\nvar log = \"error: xxx\\ninfo: yyy\\nerror: zzz\";\nlog.match(/^error:.*$/gm);\n// 결과: ['error: xxx', 'error: zzz']"
          },
          {
            "id": "language-regex-for-javascript-p03-part-7",
            "title": "Day5 - 파일명 숫자만",
            "content": "\"img_001.png\".match(/\\d+/)[0];\n\"img_002.png\".match(/\\d+/)[0];",
            "displayContent": "// Day5 - 파일명 숫자만\n\"img_001.png\".match(/\\d+/)[0];\n\"img_002.png\".match(/\\d+/)[0];\n// 결과: 001 / 002"
          },
          {
            "id": "language-regex-for-javascript-p03-part-8",
            "title": "Day6 - 실무용 이메일",
            "content": "var emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nemailRe.test(\"user@email.com\");",
            "displayContent": "// Day6 - 실무용 이메일 (완벽 검증 X, 실무용 O)\nvar emailRe = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nemailRe.test(\"user@email.com\");\n// 결과: true"
          },
          {
            "id": "language-regex-for-javascript-p03-part-9",
            "title": "Day7 - 문자열 안 호출 제외",
            "content": "var src = 'const a = \"AAA()\";\\nAAA();';\nsrc.match(/(?<![\"'`])\\bAAA\\s*\\(/g);",
            "displayContent": "// Day7 - 문자열 안 호출 제외 (단순 버전)\n// 따옴표 안 AAA()는 빼고, 코드의 AAA()만\nvar src = 'const a = \"AAA()\";\\nAAA();';\nsrc.match(/(?<![\"'`])\\bAAA\\s*\\(/g);\n// 결과: ['AAA(']  (문자열 쪽은 제외 시도)"
          },
          {
            "id": "language-regex-for-javascript-p03-part-10",
            "title": "치환 - 날짜 포맷[replace]",
            "content": "\"2026-03-18\".replace(/(\\\\d{4})-(\\\\d{2})-(\\\\d{2})/, \"$3/$2/$1\");",
            "displayContent": "// 치환 - 날짜 포맷[replace]\n\"2026-03-18\".replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \"$3/$2/$1\");\n// 결과: 18/03/2026"
          }
        ]
      }
    ]
  },
  {
    "id": "rust",
    "label": "Rust",
    "folderName": "rust",
    "lessons": [
      {
        "id": "language-rust-p01",
        "title": "P01.기본-문법",
        "fileName": "P01.기본-문법.yaml",
        "sourcePath": "assets/raw/syntax/rust/P01.기본-문법.yaml",
        "language": "rust",
        "parts": [
          {
            "id": "language-rust-p01-part-1",
            "title": "변수와 가변성[let / let mut]",
            "content": "let user_name = \"kim\";\nlet mut count = 1;\ncount += 1;\nprintln!(\"{} {}\", user_name, count);",
            "displayContent": "// 변수와 가변성[let / let mut]\n// cargo new hello && cargo run 으로 실행한다 (주석만)\nlet user_name = \"kim\";\nlet mut count = 1;\ncount += 1;\nprintln!(\"{} {}\", user_name, count);\n// 결과: kim 2"
          },
          {
            "id": "language-rust-p01-part-2",
            "title": "기본 타입[i32 u32 f64 bool char]",
            "content": "let score: i32 = 95;\nlet count: u32 = 3;\nlet ratio: f64 = 3.14;\nlet is_ok: bool = true;\nlet grade: char = 'A';\nprintln!(\"{} {} {} {} {}\", score, count, ratio, is_ok, grade);",
            "displayContent": "// 기본 타입[i32 u32 f64 bool char]\nlet score: i32 = 95;\nlet count: u32 = 3;\nlet ratio: f64 = 3.14;\nlet is_ok: bool = true;\nlet grade: char = 'A';\nprintln!(\"{} {} {} {} {}\", score, count, ratio, is_ok, grade);\n// 결과: 95 3 3.14 true A"
          },
          {
            "id": "language-rust-p01-part-3",
            "title": "문자열[String / &str]",
            "content": "let label: &str = \"hello\";\nlet text: String = String::from(\"rust\");\nprintln!(\"{} {}\", label, text);",
            "displayContent": "// 문자열[String / &str]\n// &str = 문자열 슬라이스, String = 소유하는 문자열\nlet label: &str = \"hello\";\nlet text: String = String::from(\"rust\");\nprintln!(\"{} {}\", label, text);\n// 결과: hello rust"
          },
          {
            "id": "language-rust-p01-part-4",
            "title": "연산[operator]",
            "content": "let sum = 10 + 3;\nlet rem = 10 % 3;\nlet ok = sum > 10 && rem == 1;\nprintln!(\"{} {} {}\", sum, rem, ok);",
            "displayContent": "// 연산[operator]\nlet sum = 10 + 3;\nlet rem = 10 % 3;\nlet ok = sum > 10 && rem == 1;\nprintln!(\"{} {} {}\", sum, rem, ok);\n// 결과: 13 1 true"
          },
          {
            "id": "language-rust-p01-part-5",
            "title": "조건문[if / else]",
            "content": "let score = 95;\nif score >= 90 {\n    println!(\"A\");\n} else {\n    println!(\"B\");\n}",
            "displayContent": "// 조건문[if / else]\nlet score = 95;\nif score >= 90 {\n    println!(\"A\");\n} else {\n    println!(\"B\");\n}\n// 결과: A"
          },
          {
            "id": "language-rust-p01-part-6",
            "title": "조건 표현식[if expression]",
            "content": "let score = 80;\nlet grade = if score >= 90 { \"A\" } else { \"B\" };\nprintln!(\"{}\", grade);",
            "displayContent": "// 조건 표현식[if expression] - if도 값을 만든다\nlet score = 80;\nlet grade = if score >= 90 { \"A\" } else { \"B\" };\nprintln!(\"{}\", grade);\n// 결과: B"
          },
          {
            "id": "language-rust-p01-part-7",
            "title": "반복[loop / while / for]",
            "content": "let mut n = 0;\nwhile n < 3 {\n    n += 1;\n}\nfor i in 0..5 {\n    println!(\"{}\", i);\n}",
            "displayContent": "// 반복[loop / while / for]\nlet mut n = 0;\nwhile n < 3 {\n    n += 1;\n}\nfor i in 0..5 {\n    println!(\"{}\", i);\n}\n// 결과: 0 1 2 3 4"
          },
          {
            "id": "language-rust-p01-part-8",
            "title": "함수[fn]",
            "content": "fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nlet sum = add(3, 4);\nprintln!(\"{}\", sum);",
            "displayContent": "// 함수[fn] - 마지막 표현식이 반환값 (세미콜론 없음)\nfn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nlet sum = add(3, 4);\nprintln!(\"{}\", sum);\n// 결과: 7"
          }
        ]
      },
      {
        "id": "language-rust-p02",
        "title": "P02.소유권-구조체",
        "fileName": "P02.소유권-구조체.yaml",
        "sourcePath": "assets/raw/syntax/rust/P02.소유권-구조체.yaml",
        "language": "rust",
        "parts": [
          {
            "id": "language-rust-p02-part-1",
            "title": "이동과 복사[move / copy]",
            "content": "let a = 10;\nlet b = a;\nlet s1 = String::from(\"kim\");\nlet s2 = s1;\nprintln!(\"{} {}\", b, s2);",
            "displayContent": "// 이동과 복사[move / copy]\n// i32는 Copy, String은 이동[move]된다\nlet a = 10;\nlet b = a;\nlet s1 = String::from(\"kim\");\nlet s2 = s1;\nprintln!(\"{} {}\", b, s2);\n// 결과: 10 kim"
          },
          {
            "id": "language-rust-p02-part-2",
            "title": "문자열 소유[String vs &str]",
            "content": "let owned = String::from(\"hello\");\nlet borrowed: &str = &owned;\nprintln!(\"{} {}\", owned, borrowed);",
            "displayContent": "// 문자열 소유[String vs &str]\nlet owned = String::from(\"hello\");\nlet borrowed: &str = &owned;\nprintln!(\"{} {}\", owned, borrowed);\n// 결과: hello hello"
          },
          {
            "id": "language-rust-p02-part-3",
            "title": "불변 참조[reference &]",
            "content": "fn len_of(text: &str) -> usize {\n    text.len()\n}\n\nlet name = String::from(\"rust\");\nprintln!(\"{}\", len_of(&name));",
            "displayContent": "// 불변 참조[reference &]\nfn len_of(text: &str) -> usize {\n    text.len()\n}\n\nlet name = String::from(\"rust\");\nprintln!(\"{}\", len_of(&name));\n// 결과: 4"
          },
          {
            "id": "language-rust-p02-part-4",
            "title": "가변 참조[&mut]",
            "content": "fn bump(value: &mut i32) {\n    *value += 1;\n}\n\nlet mut count = 1;\nbump(&mut count);\nprintln!(\"{}\", count);",
            "displayContent": "// 가변 참조[&mut]\nfn bump(value: &mut i32) {\n    *value += 1;\n}\n\nlet mut count = 1;\nbump(&mut count);\nprintln!(\"{}\", count);\n// 결과: 2"
          },
          {
            "id": "language-rust-p02-part-5",
            "title": "구조체[struct]",
            "content": "#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nlet user = User {\n    name: String::from(\"lee\"),\n    age: 28,\n};\nprintln!(\"{} {}\", user.name, user.age);",
            "displayContent": "// 구조체[struct]\n#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nlet user = User {\n    name: String::from(\"lee\"),\n    age: 28,\n};\nprintln!(\"{} {}\", user.name, user.age);\n// 결과: lee 28"
          },
          {
            "id": "language-rust-p02-part-6",
            "title": "메서드[impl]",
            "content": "struct Rect {\n    w: u32,\n    h: u32,\n}\n\nimpl Rect {\n    fn area(&self) -> u32 {\n        self.w * self.h\n    }\n}\n\nlet r = Rect { w: 3, h: 4 };\nprintln!(\"{}\", r.area());",
            "displayContent": "// 메서드[impl]\nstruct Rect {\n    w: u32,\n    h: u32,\n}\n\nimpl Rect {\n    fn area(&self) -> u32 {\n        self.w * self.h\n    }\n}\n\nlet r = Rect { w: 3, h: 4 };\nprintln!(\"{}\", r.area());\n// 결과: 12"
          },
          {
            "id": "language-rust-p02-part-7",
            "title": "열거형[enum / match]",
            "content": "enum Role {\n    Admin,\n    Member,\n}\n\nlet role = Role::Admin;\nmatch role {\n    Role::Admin => println!(\"admin\"),\n    Role::Member => println!(\"member\"),\n}",
            "displayContent": "// 열거형[enum / match]\nenum Role {\n    Admin,\n    Member,\n}\n\nlet role = Role::Admin;\nmatch role {\n    Role::Admin => println!(\"admin\"),\n    Role::Member => println!(\"member\"),\n}\n// 결과: admin"
          },
          {
            "id": "language-rust-p02-part-8",
            "title": "옵션[Option]",
            "content": "let maybe = Some(10);\nmatch maybe {\n    Some(v) => println!(\"{}\", v),\n    None => println!(\"none\"),\n}",
            "displayContent": "// 옵션[Option] - 값이 있을 수도 없을 수도 있다\nlet maybe = Some(10);\nmatch maybe {\n    Some(v) => println!(\"{}\", v),\n    None => println!(\"none\"),\n}\n// 결과: 10"
          },
          {
            "id": "language-rust-p02-part-9",
            "title": "결과[Result]",
            "content": "let parsed = \"42\".parse::<i32>();\nmatch parsed {\n    Ok(v) => println!(\"{}\", v),\n    Err(_) => println!(\"parse error\"),\n}",
            "displayContent": "// 결과[Result] - 성공 Ok / 실패 Err\nlet parsed = \"42\".parse::<i32>();\nmatch parsed {\n    Ok(v) => println!(\"{}\", v),\n    Err(_) => println!(\"parse error\"),\n}\n// 결과: 42"
          }
        ]
      },
      {
        "id": "language-rust-p03",
        "title": "P03.컬렉션-모듈",
        "fileName": "P03.컬렉션-모듈.yaml",
        "sourcePath": "assets/raw/syntax/rust/P03.컬렉션-모듈.yaml",
        "language": "rust",
        "parts": [
          {
            "id": "language-rust-p03-part-1",
            "title": "벡터[Vec]",
            "content": "let mut nums = vec![1, 2, 3];\nnums.push(4);\nprintln!(\"{:?}\", nums);",
            "displayContent": "// 벡터[Vec]\nlet mut nums = vec![1, 2, 3];\nnums.push(4);\nprintln!(\"{:?}\", nums);\n// 결과: [1, 2, 3, 4]"
          },
          {
            "id": "language-rust-p03-part-2",
            "title": "해시맵[HashMap]",
            "content": "use std::collections::HashMap;\n\nlet mut ages = HashMap::new();\nages.insert(\"kim\", 30);\nages.insert(\"lee\", 25);\nprintln!(\"{:?}\", ages.get(\"kim\"));",
            "displayContent": "// 해시맵[HashMap]\nuse std::collections::HashMap;\n\nlet mut ages = HashMap::new();\nages.insert(\"kim\", 30);\nages.insert(\"lee\", 25);\nprintln!(\"{:?}\", ages.get(\"kim\"));\n// 결과: Some(30)"
          },
          {
            "id": "language-rust-p03-part-3",
            "title": "반복자[iter / map / filter]",
            "content": "let nums = vec![1, 2, 3, 4];\nlet evens: Vec<i32> = nums\n    .iter()\n    .filter(|n| *n % 2 == 0)\n    .map(|n| n * 10)\n    .collect();\nprintln!(\"{:?}\", evens);",
            "displayContent": "// 반복자[iter / map / filter]\nlet nums = vec![1, 2, 3, 4];\nlet evens: Vec<i32> = nums\n    .iter()\n    .filter(|n| *n % 2 == 0)\n    .map(|n| n * 10)\n    .collect();\nprintln!(\"{:?}\", evens);\n// 결과: [20, 40]"
          },
          {
            "id": "language-rust-p03-part-4",
            "title": "모듈[mod / pub]",
            "content": "mod util {\n    pub fn greet(name: &str) -> String {\n        format!(\"hi {}\", name)\n    }\n}\n\nprintln!(\"{}\", util::greet(\"kim\"));",
            "displayContent": "// 모듈[mod / pub]\nmod util {\n    pub fn greet(name: &str) -> String {\n        format!(\"hi {}\", name)\n    }\n}\n\nprintln!(\"{}\", util::greet(\"kim\"));\n// 결과: hi kim"
          },
          {
            "id": "language-rust-p03-part-5",
            "title": "의존성 예시[Cargo.toml / serde]",
            "content": "use serde::Serialize;\n\n#[derive(Serialize)]\nstruct User {\n    name: String,\n}\n\nlet user = User {\n    name: String::from(\"kim\"),\n};\nprintln!(\"{}\", user.name);",
            "displayContent": "// 의존성 예시[Cargo.toml / serde] - toml은 참고용 주석\n// [dependencies]\n// serde = { version = \"1\", features = [\"derive\"] }\nuse serde::Serialize;\n\n#[derive(Serialize)]\nstruct User {\n    name: String,\n}\n\nlet user = User {\n    name: String::from(\"kim\"),\n};\nprintln!(\"{}\", user.name);\n// 결과: kim"
          },
          {
            "id": "language-rust-p03-part-6",
            "title": "트레이트 맛보기[trait]",
            "content": "trait Greet {\n    fn hello(&self) -> String;\n}\n\nstruct Guest {\n    name: String,\n}\n\nimpl Greet for Guest {\n    fn hello(&self) -> String {\n        format!(\"hi {}\", self.name)\n    }\n}\n\nlet g = Guest {\n    name: String::from(\"kim\"),\n};\nprintln!(\"{}\", g.hello());",
            "displayContent": "// 트레이트 맛보기[trait] - 공통 동작 약속\ntrait Greet {\n    fn hello(&self) -> String;\n}\n\nstruct Guest {\n    name: String,\n}\n\nimpl Greet for Guest {\n    fn hello(&self) -> String {\n        format!(\"hi {}\", self.name)\n    }\n}\n\nlet g = Guest {\n    name: String::from(\"kim\"),\n};\nprintln!(\"{}\", g.hello());\n// 결과: hi kim"
          },
          {
            "id": "language-rust-p03-part-7",
            "title": "에러 전파 맛보기[?]",
            "content": "fn parse_score(text: &str) -> Result<i32, std::num::ParseIntError> {\n    let value = text.parse::<i32>()?;\n    Ok(value)\n}\n\nprintln!(\"{:?}\", parse_score(\"90\"));",
            "displayContent": "// 에러 전파 맛보기[?] - Err면 바로 반환\nfn parse_score(text: &str) -> Result<i32, std::num::ParseIntError> {\n    let value = text.parse::<i32>()?;\n    Ok(value)\n}\n\nprintln!(\"{:?}\", parse_score(\"90\"));\n// 결과: Ok(90)"
          }
        ]
      }
    ]
  },
  {
    "id": "sql",
    "label": "SQL",
    "folderName": "sql",
    "lessons": [
      {
        "id": "language-sql-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/sql/P01.기본-패턴.yaml",
        "language": "sql",
        "parts": [
          {
            "id": "language-sql-p01-part-1",
            "title": "테이블 생성[create table]",
            "content": "CREATE TABLE users (\n    user_id      INTEGER PRIMARY KEY,\n    user_name    VARCHAR(50),\n    user_age     INTEGER,\n    created_at   DATE\n);",
            "displayContent": "-- 테이블 생성[create table]\nCREATE TABLE users (\n    user_id      INTEGER PRIMARY KEY,\n    user_name    VARCHAR(50),\n    user_age     INTEGER,\n    created_at   DATE\n);"
          },
          {
            "id": "language-sql-p01-part-2",
            "title": "데이터 추가[insert]",
            "content": "INSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (1, 'kim', 30, DATE '2026-03-18');\n\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (2, 'lee', 25, DATE '2026-03-18');",
            "displayContent": "-- 데이터 추가[insert]\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (1, 'kim', 30, DATE '2026-03-18');\n\nINSERT INTO users (user_id, user_name, user_age, created_at)\nVALUES (2, 'lee', 25, DATE '2026-03-18');"
          },
          {
            "id": "language-sql-p01-part-3",
            "title": "조회[select]",
            "content": "SELECT *\nFROM users;",
            "displayContent": "-- 조회[select]\nSELECT *\nFROM users;\n-- 결과:\n-- 1, kim, 30, 2026-03-18\n-- 2, lee, 25, 2026-03-18"
          },
          {
            "id": "language-sql-p01-part-4",
            "title": "조건 조회[where]",
            "content": "SELECT user_name, user_age\nFROM users\nWHERE user_age >= 30;",
            "displayContent": "-- 조건 조회[where]\nSELECT user_name, user_age\nFROM users\nWHERE user_age >= 30;\n-- 결과:\n-- kim, 30"
          },
          {
            "id": "language-sql-p01-part-5",
            "title": "정렬[order by]",
            "content": "SELECT user_name, user_age\nFROM users\nORDER BY user_age DESC;",
            "displayContent": "-- 정렬[order by]\nSELECT user_name, user_age\nFROM users\nORDER BY user_age DESC;\n-- 결과: 나이 내림차순"
          },
          {
            "id": "language-sql-p01-part-6",
            "title": "개수 제한[limit]",
            "content": "SELECT *\nFROM users\nORDER BY user_id\nFETCH FIRST 1 ROWS ONLY;",
            "displayContent": "-- 개수 제한[limit]\nSELECT *\nFROM users\nORDER BY user_id\nFETCH FIRST 1 ROWS ONLY;\n-- 결과: 첫 행 1개"
          },
          {
            "id": "language-sql-p01-part-7",
            "title": "수정[update]",
            "content": "UPDATE users\nSET user_age = 31\nWHERE user_id = 1;",
            "displayContent": "-- 수정[update]\nUPDATE users\nSET user_age = 31\nWHERE user_id = 1;"
          },
          {
            "id": "language-sql-p01-part-8",
            "title": "삭제[delete]",
            "content": "DELETE FROM users\nWHERE user_id = 2;",
            "displayContent": "-- 삭제[delete]\nDELETE FROM users\nWHERE user_id = 2;"
          },
          {
            "id": "language-sql-p01-part-9",
            "title": "집계[aggregate]",
            "content": "SELECT COUNT(*) AS user_count,\n       AVG(user_age) AS avg_age\nFROM users;",
            "displayContent": "-- 집계[aggregate]\nSELECT COUNT(*) AS user_count,\n       AVG(user_age) AS avg_age\nFROM users;\n-- 결과: 1, 31"
          },
          {
            "id": "language-sql-p01-part-10",
            "title": "그룹화[group by]",
            "content": "SELECT created_at, COUNT(*) AS row_count\nFROM users\nGROUP BY created_at;",
            "displayContent": "-- 그룹화[group by]\nSELECT created_at, COUNT(*) AS row_count\nFROM users\nGROUP BY created_at;"
          },
          {
            "id": "language-sql-p01-part-11",
            "title": "내부 조인[inner join]",
            "content": "SELECT u.user_name, o.total_price\nFROM users u\nINNER JOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 내부 조인[inner join]\n-- 조인 조건이 맞는 행만 합친다\nSELECT u.user_name, o.total_price\nFROM users u\nINNER JOIN orders o\n  ON u.user_id = o.user_id;\n-- 결과: 주문이 있는 사용자만"
          },
          {
            "id": "language-sql-p01-part-12",
            "title": "서브쿼리[subquery]",
            "content": "SELECT user_name\nFROM users\nWHERE user_id IN (\n    SELECT user_id\n    FROM orders\n    WHERE total_price >= 5000\n);",
            "displayContent": "-- 서브쿼리[subquery]\nSELECT user_name\nFROM users\nWHERE user_id IN (\n    SELECT user_id\n    FROM orders\n    WHERE total_price >= 5000\n);\n-- 결과: kim"
          },
          {
            "id": "language-sql-p01-part-13",
            "title": "공통 테이블 식[CTE]",
            "content": "WITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 공통 테이블 식[CTE]\nWITH order_sum AS (\n    SELECT user_id, SUM(total_price) AS total_amount\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.user_name, o.total_amount\nFROM users u\nJOIN order_sum o\n  ON u.user_id = o.user_id;"
          }
        ]
      },
      {
        "id": "language-sql-p02",
        "title": "P02.실무-조회",
        "fileName": "P02.실무-조회.yaml",
        "sourcePath": "assets/raw/syntax/sql/P02.실무-조회.yaml",
        "language": "sql",
        "parts": [
          {
            "id": "language-sql-p02-part-1",
            "title": "조건 묶기[condition grouping]",
            "content": "SELECT user_name\nFROM users\nWHERE user_age >= 20\n  AND user_name LIKE 'k%';",
            "displayContent": "-- 조건 묶기[condition grouping]\nSELECT user_name\nFROM users\nWHERE user_age >= 20\n  AND user_name LIKE 'k%';\n-- 결과: kim"
          },
          {
            "id": "language-sql-p02-part-2",
            "title": "범위 조회[between]",
            "content": "SELECT user_name\nFROM users\nWHERE user_age BETWEEN 20 AND 30;",
            "displayContent": "-- 범위 조회[between]\nSELECT user_name\nFROM users\nWHERE user_age BETWEEN 20 AND 30;\n-- 결과: 20~30 사이 사용자"
          },
          {
            "id": "language-sql-p02-part-3",
            "title": "포함 조회[in]",
            "content": "SELECT user_name\nFROM users\nWHERE user_id IN (1, 3, 5);",
            "displayContent": "-- 포함 조회[in]\nSELECT user_name\nFROM users\nWHERE user_id IN (1, 3, 5);\n-- 결과: 지정한 id만 조회"
          },
          {
            "id": "language-sql-p02-part-4",
            "title": "널 처리[null handling]",
            "content": "SELECT user_name, COALESCE(user_age, 0) AS safe_age\nFROM users;",
            "displayContent": "-- 널 처리[null handling]\nSELECT user_name, COALESCE(user_age, 0) AS safe_age\nFROM users;\n-- 결과: null이면 0 대체"
          },
          {
            "id": "language-sql-p02-part-5",
            "title": "왼쪽 조인[left join]",
            "content": "SELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;",
            "displayContent": "-- 왼쪽 조인[left join]\nSELECT u.user_name, o.total_price\nFROM users u\nLEFT JOIN orders o\n  ON u.user_id = o.user_id;\n-- 결과: 주문 없는 사용자도 포함"
          },
          {
            "id": "language-sql-p02-part-6",
            "title": "그룹 조건[having]",
            "content": "SELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 1;",
            "displayContent": "-- 그룹 조건[having]\nSELECT user_id, COUNT(*) AS order_count\nFROM orders\nGROUP BY user_id\nHAVING COUNT(*) >= 1;\n-- 결과: 주문 1개 이상 사용자"
          },
          {
            "id": "language-sql-p02-part-7",
            "title": "케이스[case]",
            "content": "SELECT user_name,\n       CASE\n           WHEN user_age >= 30 THEN 'senior'\n           ELSE 'junior'\n       END AS age_group\nFROM users;",
            "displayContent": "-- 케이스[case]\nSELECT user_name,\n       CASE\n           WHEN user_age >= 30 THEN 'senior'\n           ELSE 'junior'\n       END AS age_group\nFROM users;\n-- 결과: 조건에 따라 문자열 분기"
          },
          {
            "id": "language-sql-p02-part-8",
            "title": "커밋[commit]",
            "content": "COMMIT;",
            "displayContent": "-- 커밋[commit]\n-- 트랜잭션 변경을 DB에 확정한다\nCOMMIT;"
          },
          {
            "id": "language-sql-p02-part-9",
            "title": "롤백[rollback]",
            "content": "ROLLBACK;",
            "displayContent": "-- 롤백[rollback]\n-- 트랜잭션 변경을 전부 취소한다\nROLLBACK;"
          }
        ]
      },
      {
        "id": "language-sql-p03",
        "title": "P03.조인-패턴",
        "fileName": "P03.조인-패턴.yaml",
        "sourcePath": "assets/raw/syntax/sql/P03.조인-패턴.yaml",
        "language": "sql",
        "parts": [
          {
            "id": "language-sql-p03-part-1",
            "title": "내부 조인[inner join]",
            "content": "SELECT e.emp_name, d.dept_name\nFROM employees e\nINNER JOIN departments d\n  ON e.dept_id = d.dept_id;",
            "displayContent": "-- 내부 조인[inner join]\n-- 양쪽에 매칭되는 행만 남긴다\nSELECT e.emp_name, d.dept_name\nFROM employees e\nINNER JOIN departments d\n  ON e.dept_id = d.dept_id;"
          },
          {
            "id": "language-sql-p03-part-2",
            "title": "왼쪽 조인[left join]",
            "content": "SELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id;",
            "displayContent": "-- 왼쪽 조인[left join]\n-- 왼쪽(employees)은 전부, 오른쪽 없으면 NULL\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id;"
          },
          {
            "id": "language-sql-p03-part-3",
            "title": "오른쪽 조인[right join]",
            "content": "SELECT e.emp_name, d.dept_name\nFROM employees e\nRIGHT JOIN departments d\n  ON e.dept_id = d.dept_id;",
            "displayContent": "-- 오른쪽 조인[right join]\n-- 오른쪽(departments)은 전부 유지\nSELECT e.emp_name, d.dept_name\nFROM employees e\nRIGHT JOIN departments d\n  ON e.dept_id = d.dept_id;"
          },
          {
            "id": "language-sql-p03-part-4",
            "title": "완전 외부 조인[full outer join]",
            "content": "SELECT e.emp_name, d.dept_name\nFROM employees e\nFULL OUTER JOIN departments d\n  ON e.dept_id = d.dept_id;",
            "displayContent": "-- 완전 외부 조인[full outer join]\n-- 양쪽 모두 유지, 없으면 NULL\nSELECT e.emp_name, d.dept_name\nFROM employees e\nFULL OUTER JOIN departments d\n  ON e.dept_id = d.dept_id;"
          },
          {
            "id": "language-sql-p03-part-5",
            "title": "ON 다중 조건[composite key]",
            "content": "SELECT o.order_id, i.item_name\nFROM orders o\nINNER JOIN order_items i\n  ON o.order_id = i.order_id\n AND o.store_id = i.store_id;",
            "displayContent": "-- ON 다중 조건[composite key]\n-- 복합키[composite key]는 AND로 묶는다\nSELECT o.order_id, i.item_name\nFROM orders o\nINNER JOIN order_items i\n  ON o.order_id = i.order_id\n AND o.store_id = i.store_id;"
          },
          {
            "id": "language-sql-p03-part-6",
            "title": "ON 필터[on filter]",
            "content": "SELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id\n AND d.is_active = 1;",
            "displayContent": "-- ON 필터[on filter]\n-- WHERE에 오른쪽 컬럼 조건을 쓰면 LEFT가 INNER처럼 된다\n-- 필터는 ON에 두고 왼쪽 행을 지킨다\nSELECT e.emp_name, d.dept_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id\n AND d.is_active = 1;"
          },
          {
            "id": "language-sql-p03-part-7",
            "title": "미매칭 행[left join is null]",
            "content": "SELECT e.emp_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id\nWHERE d.dept_id IS NULL;",
            "displayContent": "-- 미매칭 행[left join is null]\n-- 부서에 없는 사원만 찾는다\nSELECT e.emp_name\nFROM employees e\nLEFT JOIN departments d\n  ON e.dept_id = d.dept_id\nWHERE d.dept_id IS NULL;"
          }
        ]
      }
    ]
  },
  {
    "id": "typescript",
    "label": "TypeScript",
    "folderName": "typescript",
    "lessons": [
      {
        "id": "language-typescript-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/typescript/P01.기본-패턴.yaml",
        "language": "typescript",
        "parts": [
          {
            "id": "language-typescript-p01-part-1",
            "title": "기본 타입[string number boolean]",
            "content": "let name: string = \"kim\";\nlet age: number | null = null;\nlet isLogin: boolean = false;\nconsole.log(name, age, isLogin);",
            "displayContent": "// 기본 타입[string number boolean]\nlet name: string = \"kim\";\nlet age: number | null = null;\nlet isLogin: boolean = false;\nconsole.log(name, age, isLogin);"
          },
          {
            "id": "language-typescript-p01-part-2",
            "title": "타입 별칭[type User]",
            "content": "type UserId = number;\ntype UserRole = \"admin\" | \"member\";\n\ntype User = {\n  id: UserId;\n  name: string;\n  role: UserRole;\n  email?: string;\n};",
            "displayContent": "// 타입 별칭[type User]\ntype UserId = number;\ntype UserRole = \"admin\" | \"member\";\n\ntype User = {\n  id: UserId;\n  name: string;\n  role: UserRole;\n  email?: string;\n};"
          },
          {
            "id": "language-typescript-p01-part-3",
            "title": "객체 사용[object]",
            "content": "type User = {\n  id: number;\n  name: string;\n  role: \"admin\" | \"member\";\n  email?: string;\n};\n\nconst u1: User = { id: 1, name: \"A\", role: \"admin\" };\nconst u2: User = { id: 2, name: \"B\", role: \"member\", email: \"b@x.com\" };\nconsole.log(u1.name, u2.email);",
            "displayContent": "// 객체 사용[object]\ntype User = {\n  id: number;\n  name: string;\n  role: \"admin\" | \"member\";\n  email?: string;\n};\n\nconst u1: User = { id: 1, name: \"A\", role: \"admin\" };\nconst u2: User = { id: 2, name: \"B\", role: \"member\", email: \"b@x.com\" };\nconsole.log(u1.name, u2.email);"
          },
          {
            "id": "language-typescript-p01-part-4",
            "title": "배열[User[]]",
            "content": "type User = { id: number; name: string };\n\nconst users: User[] = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst ids: number[] = [1, 2, 3];\nconsole.log(users[0].name, ids);",
            "displayContent": "// 배열[User[]]\ntype User = { id: number; name: string };\n\nconst users: User[] = [\n  { id: 1, name: \"kim\" },\n  { id: 2, name: \"lee\" },\n];\nconst ids: number[] = [1, 2, 3];\nconsole.log(users[0].name, ids);"
          },
          {
            "id": "language-typescript-p01-part-5",
            "title": "유니온[string | number]",
            "content": "type IdOrName = number | string;\nconst ids: IdOrName[] = [1, \"2\", 3];\nconsole.log(ids);",
            "displayContent": "// 유니온[string | number]\ntype IdOrName = number | string;\nconst ids: IdOrName[] = [1, \"2\", 3];\nconsole.log(ids);"
          },
          {
            "id": "language-typescript-p01-part-6",
            "title": "함수 타입[function]",
            "content": "function add(a: number, b: number): number {\n  return a + b;\n}\n\nfunction log(msg: string): void {\n  console.log(msg);\n}\n\nconsole.log(add(2, 3));\nlog(\"ok\");",
            "displayContent": "// 함수 타입[function]\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\nfunction log(msg: string): void {\n  console.log(msg);\n}\n\nconsole.log(add(2, 3));\nlog(\"ok\");"
          },
          {
            "id": "language-typescript-p01-part-7",
            "title": "화살표 함수 타입[arrow]",
            "content": "const add: (a: number, b: number) => number = (a, b) => a + b;\nconsole.log(add(2, 3));",
            "displayContent": "// 화살표 함수 타입[arrow]\nconst add: (a: number, b: number) => number = (a, b) => a + b;\nconsole.log(add(2, 3));"
          },
          {
            "id": "language-typescript-p01-part-8",
            "title": "옵셔널·기본값[optional default]",
            "content": "type SendOptions = { retry?: number };\n\nconst send = (url: string, opts: SendOptions = {}) => {\n  const retry = opts.retry ?? 0;\n  console.log(`send -> ${url} (retry=${retry})`);\n};\n\nsend(\"/ping\");\nsend(\"/ping\", { retry: 3 });",
            "displayContent": "// 옵셔널·기본값[optional default]\ntype SendOptions = { retry?: number };\n\nconst send = (url: string, opts: SendOptions = {}) => {\n  const retry = opts.retry ?? 0;\n  console.log(`send -> ${url} (retry=${retry})`);\n};\n\nsend(\"/ping\");\nsend(\"/ping\", { retry: 3 });"
          },
          {
            "id": "language-typescript-p01-part-9",
            "title": "readonly 필드[readonly]",
            "content": "type User = {\n  readonly id: number;\n  name: string;\n};\n\nconst user: User = { id: 1, name: \"kim\" };\nconsole.log(user.id);",
            "displayContent": "// readonly 필드[readonly]\ntype User = {\n  readonly id: number;\n  name: string;\n};\n\nconst user: User = { id: 1, name: \"kim\" };\nconsole.log(user.id);"
          },
          {
            "id": "language-typescript-p01-part-10",
            "title": "상태 리터럴[status union]",
            "content": "type Status = \"loading\" | \"success\" | \"error\";\n\nfunction handle(status: Status) {\n  if (status === \"loading\") {\n    console.log(\"wait\");\n  }\n}\n\nhandle(\"loading\");",
            "displayContent": "// 상태 리터럴[status union] — enum 대신 자주 씀\ntype Status = \"loading\" | \"success\" | \"error\";\n\nfunction handle(status: Status) {\n  if (status === \"loading\") {\n    console.log(\"wait\");\n  }\n}\n\nhandle(\"loading\");"
          }
        ]
      },
      {
        "id": "language-typescript-p02",
        "title": "P02.실무-패턴",
        "fileName": "P02.실무-패턴.yaml",
        "sourcePath": "assets/raw/syntax/typescript/P02.실무-패턴.yaml",
        "language": "typescript",
        "parts": [
          {
            "id": "language-typescript-p02-part-1",
            "title": "interface 확장[extends]",
            "content": "interface BaseEntity {\n  id: number;\n  createdAt: string;\n}\n\ninterface Account extends BaseEntity {\n  email: string;\n}\n\nconst acc: Account = {\n  id: 10,\n  createdAt: \"2025-01-01\",\n  email: \"x@y.com\",\n};\nconsole.log(acc.email);",
            "displayContent": "// interface 확장[extends]\ninterface BaseEntity {\n  id: number;\n  createdAt: string;\n}\n\ninterface Account extends BaseEntity {\n  email: string;\n}\n\nconst acc: Account = {\n  id: 10,\n  createdAt: \"2025-01-01\",\n  email: \"x@y.com\",\n};\nconsole.log(acc.email);"
          },
          {
            "id": "language-typescript-p02-part-2",
            "title": "교차 타입[&]",
            "content": "type BaseEntity = { id: number; createdAt: string };\ntype Profile = { displayName: string } & BaseEntity;\n\nconst prof: Profile = {\n  id: 11,\n  createdAt: \"2025-02-01\",\n  displayName: \"Kim\",\n};\nconsole.log(prof.displayName);",
            "displayContent": "// 교차 타입[&]\ntype BaseEntity = { id: number; createdAt: string };\ntype Profile = { displayName: string } & BaseEntity;\n\nconst prof: Profile = {\n  id: 11,\n  createdAt: \"2025-02-01\",\n  displayName: \"Kim\",\n};\nconsole.log(prof.displayName);"
          },
          {
            "id": "language-typescript-p02-part-3",
            "title": "제네릭 함수[wrapArray]",
            "content": "function wrapArray<T>(value: T): T[] {\n  return [value];\n}\n\nconst a1 = wrapArray(123);\nconst a2 = wrapArray({ x: 1 });\nconsole.log(a1, a2);",
            "displayContent": "// 제네릭 함수[wrapArray]\nfunction wrapArray<T>(value: T): T[] {\n  return [value];\n}\n\nconst a1 = wrapArray(123);\nconst a2 = wrapArray({ x: 1 });\nconsole.log(a1, a2);"
          },
          {
            "id": "language-typescript-p02-part-4",
            "title": "제네릭 + keyof[getProp]",
            "content": "function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 1, name: \"Lee\", role: \"member\" as const };\nconsole.log(getProp(user, \"name\"));",
            "displayContent": "// 제네릭 + keyof[getProp]\nfunction getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 1, name: \"Lee\", role: \"member\" as const };\nconsole.log(getProp(user, \"name\"));"
          },
          {
            "id": "language-typescript-p02-part-5",
            "title": "타입 가드[is string]",
            "content": "function isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\n\nfunction printLen(x: unknown) {\n  if (isString(x)) {\n    console.log(\"length:\", x.length);\n  } else if (typeof x === \"number\") {\n    console.log(\"double:\", x * 2);\n  }\n}\n\nprintLen(\"abc\");\nprintLen(10);",
            "displayContent": "// 타입 가드[is string]\nfunction isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\n\nfunction printLen(x: unknown) {\n  if (isString(x)) {\n    console.log(\"length:\", x.length);\n  } else if (typeof x === \"number\") {\n    console.log(\"double:\", x * 2);\n  }\n}\n\nprintLen(\"abc\");\nprintLen(10);"
          },
          {
            "id": "language-typescript-p02-part-6",
            "title": "판별 유니온[ok]",
            "content": "type ApiOk<T> = { ok: true; data: T };\ntype ApiErr = { ok: false; error: string };\ntype ApiResult<T> = ApiOk<T> | ApiErr;\n\nfunction handleResult<T>(res: ApiResult<T>) {\n  if (res.ok) {\n    console.log(\"data:\", res.data);\n  } else {\n    console.error(\"error:\", res.error);\n  }\n}\n\nhandleResult({ ok: true, data: { id: 1 } });",
            "displayContent": "// 판별 유니온[ok]\ntype ApiOk<T> = { ok: true; data: T };\ntype ApiErr = { ok: false; error: string };\ntype ApiResult<T> = ApiOk<T> | ApiErr;\n\nfunction handleResult<T>(res: ApiResult<T>) {\n  if (res.ok) {\n    console.log(\"data:\", res.data);\n  } else {\n    console.error(\"error:\", res.error);\n  }\n}\n\nhandleResult({ ok: true, data: { id: 1 } });"
          },
          {
            "id": "language-typescript-p02-part-7",
            "title": "as const 리터럴[as const]",
            "content": "const ROLES = [\"admin\", \"member\", \"guest\"] as const;\ntype Role = (typeof ROLES)[number];\n\nfunction createUser(name: string, role: Role) {\n  return { id: Date.now(), name, role };\n}\n\nconsole.log(createUser(\"Park\", \"admin\"));",
            "displayContent": "// as const 리터럴[as const]\nconst ROLES = [\"admin\", \"member\", \"guest\"] as const;\ntype Role = (typeof ROLES)[number];\n\nfunction createUser(name: string, role: Role) {\n  return { id: Date.now(), name, role };\n}\n\nconsole.log(createUser(\"Park\", \"admin\"));"
          },
          {
            "id": "language-typescript-p02-part-8",
            "title": "Record / keyof[Record]",
            "content": "type Locale = \"en\" | \"ko\" | \"ja\";\nconst messages: Record<Locale, string> = {\n  en: \"Hello\",\n  ko: \"안녕하세요\",\n  ja: \"こんにちは\",\n};\n\ntype MsgKeys = keyof typeof messages;\nfunction t(key: MsgKeys) {\n  return messages[key];\n}\n\nconsole.log(t(\"ko\"));",
            "displayContent": "// Record / keyof[Record]\ntype Locale = \"en\" | \"ko\" | \"ja\";\nconst messages: Record<Locale, string> = {\n  en: \"Hello\",\n  ko: \"안녕하세요\",\n  ja: \"こんにちは\",\n};\n\ntype MsgKeys = keyof typeof messages;\nfunction t(key: MsgKeys) {\n  return messages[key];\n}\n\nconsole.log(t(\"ko\"));"
          },
          {
            "id": "language-typescript-p02-part-9",
            "title": "typeof로 타입 뽑기[typeof]",
            "content": "const CONFIG = {\n  apiBase: \"/api\",\n  timeoutMs: 3000,\n  features: { metrics: true, beta: false },\n} as const;\n\ntype Config = typeof CONFIG;\ntype FeatureFlags = keyof Config[\"features\"];\n\nfunction isFeatureOn(flag: FeatureFlags) {\n  return CONFIG.features[flag];\n}\n\nconsole.log(isFeatureOn(\"metrics\"));",
            "displayContent": "// typeof로 타입 뽑기[typeof]\nconst CONFIG = {\n  apiBase: \"/api\",\n  timeoutMs: 3000,\n  features: { metrics: true, beta: false },\n} as const;\n\ntype Config = typeof CONFIG;\ntype FeatureFlags = keyof Config[\"features\"];\n\nfunction isFeatureOn(flag: FeatureFlags) {\n  return CONFIG.features[flag];\n}\n\nconsole.log(isFeatureOn(\"metrics\"));"
          },
          {
            "id": "language-typescript-p02-part-10",
            "title": "상태 객체[State]",
            "content": "type User = { id: number; name: string };\n\ntype State = {\n  loading: boolean;\n  data: User | null;\n};\n\nconst state: State = { loading: false, data: null };\nconsole.log(state.loading);",
            "displayContent": "// 상태 객체[State]\ntype User = { id: number; name: string };\n\ntype State = {\n  loading: boolean;\n  data: User | null;\n};\n\nconst state: State = { loading: false, data: null };\nconsole.log(state.loading);"
          }
        ]
      },
      {
        "id": "language-typescript-p03",
        "title": "P03.유틸-API-패턴",
        "fileName": "P03.유틸-API-패턴.yaml",
        "sourcePath": "assets/raw/syntax/typescript/P03.유틸-API-패턴.yaml",
        "language": "typescript",
        "parts": [
          {
            "id": "language-typescript-p03-part-1",
            "title": "Partial - PATCH용[Partial]",
            "content": "type User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nfunction updateUserPartially(id: number, data: Partial<User>) {\n  console.log(\"PATCH:\", id, data);\n}\n\nupdateUserPartially(1, { name: \"Kim\" });\nupdateUserPartially(1, { email: \"x@y.com\" });",
            "displayContent": "// Partial - PATCH용[Partial]\n// 모든 필드를 optional로 바꿔 \"일부만 수정\"을 허용한다\ntype User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nfunction updateUserPartially(id: number, data: Partial<User>) {\n  console.log(\"PATCH:\", id, data);\n}\n\nupdateUserPartially(1, { name: \"Kim\" });\nupdateUserPartially(1, { email: \"x@y.com\" });"
          },
          {
            "id": "language-typescript-p03-part-2",
            "title": "Partial 안 쓸 때[required POST]",
            "content": "type User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nfunction createUser(u: User) {\n  console.log(\"POST:\", u);\n}\n\ncreateUser({ id: 1, name: \"Kim\", email: \"x@y.com\" });",
            "displayContent": "// Partial 안 쓸 때[required POST]\n// 생성(POST)은 필수 필드를 모두 받는다\ntype User = {\n  id: number;\n  name: string;\n  email: string;\n};\n\nfunction createUser(u: User) {\n  console.log(\"POST:\", u);\n}\n\ncreateUser({ id: 1, name: \"Kim\", email: \"x@y.com\" });"
          },
          {
            "id": "language-typescript-p03-part-3",
            "title": "Partial+Pick 조합[PatchUser]",
            "content": "type User = {\n  id: number;\n  name: string;\n  email: string;\n  role: \"admin\" | \"member\";\n};\n\ntype PatchUser = Partial<Pick<User, \"name\" | \"email\" | \"role\">>;\n\nconst body: PatchUser = { email: \"new@x.com\" };\nconsole.log(body);",
            "displayContent": "// Partial+Pick 조합[PatchUser]\n// 수정 가능한 필드만 고르고, 각각 optional로 만든다\ntype User = {\n  id: number;\n  name: string;\n  email: string;\n  role: \"admin\" | \"member\";\n};\n\ntype PatchUser = Partial<Pick<User, \"name\" | \"email\" | \"role\">>;\n\nconst body: PatchUser = { email: \"new@x.com\" };\nconsole.log(body);"
          },
          {
            "id": "language-typescript-p03-part-4",
            "title": "Pick - 화면용 축소[Pick]",
            "content": "type UserDTO = {\n  id: number;\n  name: string;\n  email: string;\n  role: \"admin\" | \"member\";\n};\n\ntype UserVM = Pick<UserDTO, \"id\" | \"name\" | \"role\">;\n\nfunction toUserVM(u: UserDTO): UserVM {\n  return { id: u.id, name: u.name, role: u.role };\n}\n\nconsole.log(toUserVM({ id: 1, name: \"Jane\", email: \"j@x.com\", role: \"member\" }));",
            "displayContent": "// Pick - 화면용 축소[Pick]\ntype UserDTO = {\n  id: number;\n  name: string;\n  email: string;\n  role: \"admin\" | \"member\";\n};\n\ntype UserVM = Pick<UserDTO, \"id\" | \"name\" | \"role\">;\n\nfunction toUserVM(u: UserDTO): UserVM {\n  return { id: u.id, name: u.name, role: u.role };\n}\n\nconsole.log(toUserVM({ id: 1, name: \"Jane\", email: \"j@x.com\", role: \"member\" }));"
          },
          {
            "id": "language-typescript-p03-part-5",
            "title": "Omit - 필드 제외[Omit]",
            "content": "type FullUser = {\n  id: number;\n  name: string;\n  email: string;\n};\n\ntype PublicUser = Omit<FullUser, \"email\">;\n\nconst pub: PublicUser = { id: 1, name: \"Kim\" };\nconsole.log(pub);",
            "displayContent": "// Omit - 필드 제외[Omit]\ntype FullUser = {\n  id: number;\n  name: string;\n  email: string;\n};\n\ntype PublicUser = Omit<FullUser, \"email\">;\n\nconst pub: PublicUser = { id: 1, name: \"Kim\" };\nconsole.log(pub);"
          },
          {
            "id": "language-typescript-p03-part-6",
            "title": "Readonly[Readonly]",
            "content": "type UserCard = { id: number; name: string };\ntype FrozenUser = Readonly<UserCard>;\n\nconst fu: FrozenUser = { id: 1, name: \"Kim\" };\nconsole.log(fu.name);",
            "displayContent": "// Readonly[Readonly]\ntype UserCard = { id: number; name: string };\ntype FrozenUser = Readonly<UserCard>;\n\nconst fu: FrozenUser = { id: 1, name: \"Kim\" };\nconsole.log(fu.name);"
          },
          {
            "id": "language-typescript-p03-part-7",
            "title": "API 응답 껍데기[ApiEnvelope]",
            "content": "type ApiEnvelope<T> = {\n  status: number;\n  data: T;\n  meta?: { requestId: string };\n};\n\ntype UserDTO = { id: number; name: string };\n\nconst detail: ApiEnvelope<UserDTO> = {\n  status: 200,\n  data: { id: 1, name: \"AA\" },\n};\nconsole.log(detail.data.name);",
            "displayContent": "// API 응답 껍데기[ApiEnvelope]\ntype ApiEnvelope<T> = {\n  status: number;\n  data: T;\n  meta?: { requestId: string };\n};\n\ntype UserDTO = { id: number; name: string };\n\nconst detail: ApiEnvelope<UserDTO> = {\n  status: 200,\n  data: { id: 1, name: \"AA\" },\n};\nconsole.log(detail.data.name);"
          },
          {
            "id": "language-typescript-p03-part-8",
            "title": "목록 응답[ListResponse]",
            "content": "type ApiEnvelope<T> = { status: number; data: T };\ntype ListResponse<T> = ApiEnvelope<{ items: T[]; total: number }>;\ntype UserDTO = { id: number; name: string };\n\nconst list: ListResponse<UserDTO> = {\n  status: 200,\n  data: { items: [{ id: 1, name: \"AA\" }], total: 1 },\n};\nconsole.log(list.data.total);",
            "displayContent": "// 목록 응답[ListResponse]\ntype ApiEnvelope<T> = { status: number; data: T };\ntype ListResponse<T> = ApiEnvelope<{ items: T[]; total: number }>;\ntype UserDTO = { id: number; name: string };\n\nconst list: ListResponse<UserDTO> = {\n  status: 200,\n  data: { items: [{ id: 1, name: \"AA\" }], total: 1 },\n};\nconsole.log(list.data.total);"
          },
          {
            "id": "language-typescript-p03-part-9",
            "title": "얕은 머지[spread patch]",
            "content": "type UserDTO = {\n  id: number;\n  name: string;\n  email: string;\n};\ntype PatchUser = Partial<Pick<UserDTO, \"name\" | \"email\">>;\n\nfunction mergeUser(u: UserDTO, patch: PatchUser): UserDTO {\n  return { ...u, ...patch };\n}\n\nconst merged = mergeUser(\n  { id: 1, name: \"Jane\", email: \"j@x.com\" },\n  { name: \"Jane Park\" },\n);\nconsole.log(merged.name);",
            "displayContent": "// 얕은 머지[spread patch]\ntype UserDTO = {\n  id: number;\n  name: string;\n  email: string;\n};\ntype PatchUser = Partial<Pick<UserDTO, \"name\" | \"email\">>;\n\nfunction mergeUser(u: UserDTO, patch: PatchUser): UserDTO {\n  return { ...u, ...patch };\n}\n\nconst merged = mergeUser(\n  { id: 1, name: \"Jane\", email: \"j@x.com\" },\n  { name: \"Jane Park\" },\n);\nconsole.log(merged.name);"
          },
          {
            "id": "language-typescript-p03-part-10",
            "title": "React Props 명시[Props]",
            "content": "type ButtonProps = {\n  label: string;\n  onClick: () => void;\n  disabled?: boolean;\n};\n\nfunction Button({ label, onClick, disabled = false }: ButtonProps) {\n  console.log(label, disabled);\n  onClick();\n}\n\nButton({ label: \"Save\", onClick: () => console.log(\"click\") });",
            "displayContent": "// React Props 명시[Props]\n// FC<Props> 대신 props 타입을 직접 적는 패턴\ntype ButtonProps = {\n  label: string;\n  onClick: () => void;\n  disabled?: boolean;\n};\n\nfunction Button({ label, onClick, disabled = false }: ButtonProps) {\n  console.log(label, disabled);\n  onClick();\n}\n\nButton({ label: \"Save\", onClick: () => console.log(\"click\") });"
          }
        ]
      }
    ]
  },
  {
    "id": "vscode",
    "label": "VS Code",
    "folderName": "vscode",
    "lessons": [
      {
        "id": "language-vscode-p01",
        "title": "P01.참조-검색",
        "fileName": "P01.참조-검색.yaml",
        "sourcePath": "assets/raw/syntax/vscode/P01.참조-검색.yaml",
        "language": "shell",
        "parts": [
          {
            "id": "language-vscode-p01-part-1",
            "title": "Find All References[Shift+F12]",
            "content": "Shift+F12",
            "displayContent": "# Find All References[Shift+F12]\n# 정의부에 커서 → 호출 위치 전부 (언어 서버 있을 때 최우선)\nShift+F12"
          },
          {
            "id": "language-vscode-p01-part-2",
            "title": "Peek References[Alt+Shift+F12]",
            "content": "Alt+Shift+F12",
            "displayContent": "# Peek References[Alt+Shift+F12]\n# 사이드 패널 대신 인라인으로 참조 미리보기\nAlt+Shift+F12"
          },
          {
            "id": "language-vscode-p01-part-3",
            "title": "Go to Definition[F12]",
            "content": "F12\nAlt+F12",
            "displayContent": "# Go to Definition[F12]\nF12\nAlt+F12"
          },
          {
            "id": "language-vscode-p01-part-4",
            "title": "워크스페이스 검색[Ctrl+Shift+F]",
            "content": "Ctrl+Shift+F",
            "displayContent": "# 워크스페이스 검색[Ctrl+Shift+F]\n# 언어 서버 없을 때 → Regex ON 후 \\bAAA\\s*\\(\nCtrl+Shift+F"
          },
          {
            "id": "language-vscode-p01-part-5",
            "title": "호출만 regex[\\\\bAAA\\\\s*\\\\(]",
            "content": "\\bAAA\\s*\\(",
            "displayContent": "# 호출만 regex[\\bAAA\\s*\\(]\n# Ctrl+Shift+F → .* (Regex) ON\n\\bAAA\\s*\\("
          },
          {
            "id": "language-vscode-p01-part-6",
            "title": "정의 제외 regex[lookbehind]",
            "content": "(?<!function\\s)\\bAAA\\s*\\(",
            "displayContent": "# 정의 제외 regex[lookbehind]\n# JS/TS에서 function AAA 정의는 빼고 호출만\n(?<!function\\s)\\bAAA\\s*\\("
          },
          {
            "id": "language-vscode-p01-part-7",
            "title": "Call Hierarchy[호출 계층]",
            "content": "Ctrl+Shift+H",
            "displayContent": "# Call Hierarchy[호출 계층]\n# 정의부 우클릭 → Peek → Call Hierarchy → Incoming Calls\n# 실제 호출 흐름 추적\nCtrl+Shift+H"
          },
          {
            "id": "language-vscode-p01-part-8",
            "title": "심볼로 이동[Ctrl+T]",
            "content": "Ctrl+T",
            "displayContent": "# 심볼로 이동[Ctrl+T]\n# 워크스페이스 심볼(함수·클래스) 빠른 검색\nCtrl+T"
          },
          {
            "id": "language-vscode-p01-part-9",
            "title": "파일 내 심볼[Ctrl+Shift+O]",
            "content": "Ctrl+Shift+O",
            "displayContent": "# 파일 내 심볼[Ctrl+Shift+O]\nCtrl+Shift+O"
          },
          {
            "id": "language-vscode-p01-part-10",
            "title": "추천 순서[우선순위]",
            "content": "Shift+F12\nCtrl+Shift+F",
            "displayContent": "# 추천 순서[우선순위]\n# 1) Shift+F12 Find All References\n# 2) Call Hierarchy Incoming Calls\n# 3) Ctrl+Shift+F + \\bAAA\\s*\\(\nShift+F12\nCtrl+Shift+F"
          }
        ]
      }
    ]
  },
  {
    "id": "yup",
    "label": "Yup",
    "folderName": "yup",
    "lessons": [
      {
        "id": "language-yup-p01",
        "title": "P01.기본-패턴",
        "fileName": "P01.기본-패턴.yaml",
        "sourcePath": "assets/raw/syntax/yup/P01.기본-패턴.yaml",
        "language": "typescript",
        "parts": [
          {
            "id": "language-yup-p01-part-1",
            "title": "문자열 필수·최소[string required min]",
            "content": "import * as yup from \"yup\";\n\nconst nameSchema = yup.string().required().min(2);",
            "displayContent": "// 문자열 필수[required] · 최소 길이[min]\nimport * as yup from \"yup\";\n\nconst nameSchema = yup.string().required().min(2);\n// 결과: \"ki\" 이상이어야 통과"
          },
          {
            "id": "language-yup-p01-part-2",
            "title": "객체 스키마[object]",
            "content": "import * as yup from \"yup\";\n\nconst userSchema = yup.object({\n  name: yup.string().required(),\n  age: yup.number().required().positive().integer(),\n  email: yup.string().email().required(),\n});",
            "displayContent": "// 객체 스키마[object] — name / age / email\nimport * as yup from \"yup\";\n\nconst userSchema = yup.object({\n  name: yup.string().required(),\n  age: yup.number().required().positive().integer(),\n  email: yup.string().email().required(),\n});"
          },
          {
            "id": "language-yup-p01-part-3",
            "title": "배열 of[array of]",
            "content": "import * as yup from \"yup\";\n\nconst tagsSchema = yup.array().of(yup.string().required());",
            "displayContent": "// 배열[array] · 요소 스키마[of]\nimport * as yup from \"yup\";\n\nconst tagsSchema = yup.array().of(yup.string().required());"
          },
          {
            "id": "language-yup-p01-part-4",
            "title": "필수·널·선택[required nullable optional]",
            "content": "import * as yup from \"yup\";\n\nconst requiredName = yup.string().required();\nconst nullableBio = yup.string().nullable();\nconst optionalNick = yup.string().optional();",
            "displayContent": "// 필수[required] · 널 허용[nullable] · 선택[optional]\nimport * as yup from \"yup\";\n\nconst requiredName = yup.string().required();\nconst nullableBio = yup.string().nullable();\nconst optionalNick = yup.string().optional();"
          },
          {
            "id": "language-yup-p01-part-5",
            "title": "email · matches · oneOf",
            "content": "import * as yup from \"yup\";\n\nconst emailSchema = yup.string().email().required();\nconst codeSchema = yup.string().matches(/^[A-Z]{3}$/).required();\nconst roleSchema = yup.string().oneOf([\"admin\", \"member\"]).required();",
            "displayContent": "// 이메일[email] · 정규식[matches] · 허용값[oneOf]\nimport * as yup from \"yup\";\n\nconst emailSchema = yup.string().email().required();\nconst codeSchema = yup.string().matches(/^[A-Z]{3}$/).required();\nconst roleSchema = yup.string().oneOf([\"admin\", \"member\"]).required();"
          },
          {
            "id": "language-yup-p01-part-6",
            "title": "숫자 min/max integer positive",
            "content": "import * as yup from \"yup\";\n\nconst ageSchema = yup\n  .number()\n  .required()\n  .integer()\n  .positive()\n  .min(1)\n  .max(120);",
            "displayContent": "// 숫자[number] — min / max / integer / positive\nimport * as yup from \"yup\";\n\nconst ageSchema = yup\n  .number()\n  .required()\n  .integer()\n  .positive()\n  .min(1)\n  .max(120);"
          },
          {
            "id": "language-yup-p01-part-7",
            "title": "배열 of + min",
            "content": "import * as yup from \"yup\";\n\nconst idsSchema = yup\n  .array()\n  .of(yup.number().integer().positive())\n  .min(1)\n  .required();",
            "displayContent": "// 배열[array] of + 최소 개수[min]\nimport * as yup from \"yup\";\n\nconst idsSchema = yup\n  .array()\n  .of(yup.number().integer().positive())\n  .min(1)\n  .required();"
          },
          {
            "id": "language-yup-p01-part-8",
            "title": "폼 스키마[agree boolean]",
            "content": "import * as yup from \"yup\";\n\nconst formSchema = yup.object({\n  email: yup.string().email().required(),\n  agree: yup.boolean().oneOf([true]).required(),\n});",
            "displayContent": "// 폼 스키마[form] — 동의[agree]는 true만 허용\nimport * as yup from \"yup\";\n\nconst formSchema = yup.object({\n  email: yup.string().email().required(),\n  agree: yup.boolean().oneOf([true]).required(),\n});"
          },
          {
            "id": "language-yup-p01-part-9",
            "title": "validate · abortEarly",
            "content": "import * as yup from \"yup\";\n\nconst schema = yup.object({\n  name: yup.string().required(),\n  age: yup.number().required().min(18),\n});\n\nawait schema.validate(\n  { name: \"\", age: 10 },\n  { abortEarly: false },\n);",
            "displayContent": "// 검증[validate] — abortEarly: false 면 오류 전부 수집\nimport * as yup from \"yup\";\n\nconst schema = yup.object({\n  name: yup.string().required(),\n  age: yup.number().required().min(18),\n});\n\nawait schema.validate(\n  { name: \"\", age: 10 },\n  { abortEarly: false },\n);"
          },
          {
            "id": "language-yup-p01-part-10",
            "title": "isValid",
            "content": "import * as yup from \"yup\";\n\nconst schema = yup.object({ name: yup.string().required() });\nconst ok = await schema.isValid({ name: \"kim\" });",
            "displayContent": "// 유효 여부[isValid] — boolean만 필요할 때\nimport * as yup from \"yup\";\n\nconst schema = yup.object({ name: yup.string().required() });\nconst ok = await schema.isValid({ name: \"kim\" });\n// 결과: true"
          },
          {
            "id": "language-yup-p01-part-11",
            "title": "InferType",
            "content": "import { InferType, object, string } from \"yup\";\n\nconst userSchema = object({\n  name: string().required(),\n});\ntype User = InferType<typeof userSchema>;",
            "displayContent": "// 타입 추론[InferType] — 스키마에서 TS 타입 뽑기\nimport { InferType, object, string } from \"yup\";\n\nconst userSchema = object({\n  name: string().required(),\n});\ntype User = InferType<typeof userSchema>;\n// 결과: { name: string }"
          }
        ]
      }
    ]
  }
] as LanguageTrack[];
